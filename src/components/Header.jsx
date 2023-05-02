import { RxPerson } from 'react-icons/rx'
import { BsSearch } from 'react-icons/bs'
import { BsCartPlus } from 'react-icons/bs'

const Header = () => {
  return (
    <div className='Header h-14 flex items-center sticky top-0 px-10 w-full'>
      <div className="logo">
        <>TechHive</>
      </div>

      <div className="header__search flex items-center rounded-3xl flex-1">
        <input type="text" className="header__searchInput border-none outline-none" placeholder=''/>
        <BsSearch className='header_searchicon'/>
      </div>

      <div className="header___nav flex gap-6 leading-none">
        <div className="header__signIn flex text-white text-sm leading-none mr-3">
          <RxPerson className='text-white text-xl mr-1 mt-1'/>
         <div className="account flex flex-col">
         <span className="user font-light cursor-pointer text-xs">Hello Guest</span>
          <span className="signIn cursor-pointer font-semibold">Sign In</span>
         </div>
        </div>

        <div className="header__orders flex flex-col mr-4 text-white text-sm leading-none">
        <span className="returns cursor-pointer font-light text-xs">Returns</span>
          <span className="orders cursor-pointer">& orders</span>
        </div>

        {/* <div className="header__Prime flex flex-col mr-3 text-white text-sm leading-none">
        <span className="user cursor-pointer">Your</span>
          <span className="signIn cursor-pointer">Prime</span>
        </div>    */}

        <div className="Header__Cart text-white  cursor-pointer text-3xl flex">
          <BsCartPlus/>
          <span className='CartCounter text-xs'>0</span>
        </div>
 
      </div>
    </div>
  )
}

export default Header