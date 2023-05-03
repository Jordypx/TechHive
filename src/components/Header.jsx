import { RxPerson } from 'react-icons/rx'
import { BsSearch } from 'react-icons/bs'
import { BsCart2 } from 'react-icons/bs'
import { BiPhone } from 'react-icons/bi'


const Header = () => {
  return (
    <div className="">
      <header className='head-content flex items-center justify-between p-1.5 m-0 text-white'>
        <div className="phone-number flex items-center gap-1 px-4">
          <BiPhone className='text-white text-xs' />
          <i>+234 975645636</i>
        </div>
        <div className="discount">
          <p>Get 50% off on selected items <i className=''>|</i> <span className='ml-2'>Buy Now</span></p>
        </div>
        <div className="blog-contact px-4 cursor-pointer">
          <span className='mr-2'>Blog</span>
          <span>Location</span>
        </div>
      </header>

     <div className="sub-heading flex justify-between px-10 mt-4">
      <div className="logo-text text-3xl tracking-wide font-bold font-sans">
        Techive
      </div>

      <div className="devices-WeSell mt-4">
        <ul className='flex gap-5 text-xs font-semibold tracking-wider font-mono cursor-pointer'>
          <li>Laptops</li>
          <li>Phones</li>
          <li>HeadPhones</li>
          <li>Speakers</li>
        </ul>
      </div>

      <div className="search-bar mt-2">
        <input type="text" placeholder='Search Products' />
       <div className="search-icon">
       <BsSearch />
       </div>
      </div>

    <div className="options flex gap-4">

    <div className="login flex">
        <RxPerson />
        <span>Sign In</span>
      </div>

      <div className="orders">
        <span>Orders</span>
      </div>

      <div className="cart flex">
        <BsCart2  />
        {/* <span className="counter">0</span> */}
        <p>cart</p>
      </div>
    </div>


     </div>
    </div>
   
  )
}

export default Header