import { RxPerson } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
 

import { Link } from "react-router-dom";
import { useStateValue } from "../contexts/StateProvider";
import { auth } from "../firebase/Firebase";
 
const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  // const [authUser, setAuthUser] = useState(null)
  
  const handleAuth = () => {
    if (user) {
      signOut(auth).then(() => {
        console.log('success')
      })
    }  
  }

  useEffect(() =>{
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        // setAuthUser(user);

        dispatch({
          type: 'SET_USER',
          user: user
        })
      } else {
        // setAuthUser(null);
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    });

    return () => {
      listen();
    }
  }, []);

  return (
    <div className="headers">
      <header className="head-content flex items-center justify-between p-1.5 m-0 text-white sticky top-0 z-10">
        <div className="phone-number flex items-center gap-1 px-4">
          <BiPhone className="text-white text-xs" />
          <i>+234 975645636</i>
        </div>
        <div className="discount">
          <p>
            Get 50% off on selected items <i className="">|</i>
            <span className="ml-2">Buy Now</span>
          </p>
        </div>
        <div className="blog-contact px-4 cursor-pointer">
          <span className="mr-2">Blog</span>
          <span>Location</span>
        </div>
      </header>

      <nav className="flex justify-between px-10 mt-4 sticky  bg-white z-100">
        <Link to="/">
          <div className="logo-text text-3xl tracking-wide font-bold font-sans overflow-hidden">
            Techive
          </div>
        </Link>

        <div className="devices-WeSell mt-4">
          <ul className="flex gap-5 text-xs font-semibold tracking-wider font-mono cursor-pointer">
            <li>Laptops</li>
            <li>Phones</li>
            <li>HeadPhones</li>
            <li>Speakers</li>
          </ul>
        </div>

        <div className="search-bar mt-1">
          <input type="text" placeholder="Search Products" />
          <div className="search-icon">
            <BsSearch />
          </div>
        </div>

        <div className="options flex gap-7 mr-3 mt-3.5">
          <Link to={!user && '/Login'}>
            <div className="login flex" onClick={handleAuth}>
              <RxPerson />
              <span className="text-base">{user ? 'SignOut'  : 'SignIn'}</span>
            </div>
          </Link>

        <Link to="/Orders">
        <div className="orders -mt-1 font-semibold">
            <span className="cursor-pointer">Orders</span>
          </div>
        </Link>

          <Link to="/checkout">
            <div className="cart flex gap-0.2s">
              <BsCart2 className="text-lg -mt-0.5" />
              <span className="counter -mt-0.9 font-semibold text-sm">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
   
              
                                                                                       