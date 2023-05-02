import { RxPerson } from 'react-icons/rx'
import { GrSearch } from 'react-icons/Gr'
import { BsCartPlus } from 'react-icons/bs'

const Header = () => {
  return (
    <div className='Header h-14 flex items-center bg-green-900 sticky top-0 px-6 w-full'>
      <div className="logo">
        <>TechHive</>
      </div>

      <div className="header__search flex items-center rounded-3xl flex-1">
        <input type="text" className="header__searchInput border-none outline-none" name=""/>
        <GrSearch className='header_searchicon'/>
      </div>

      <div className="header___nav flex justify-evenly">
        <div className="header__signIn flex flex-col mr-3 text-white">
          <RxPerson className='text-white'/>
          <span className="user">Hello Guest</span>
          <span className="signIn">Sign In</span>
        </div>

        <div className="header__orders flex flex-col mr-3 text-white">
        <span className="returns">Returns</span>
          <span className="orders">& orders</span>
        </div>

        <div className="header__Prime flex flex-col mr-3 text-white">
        <span className="user">Your</span>
          <span className="signIn">Prime</span>
        </div>   

        <div className="Header__Cart text-white">
          <BsCartPlus/>
        </div>
 
      </div>
    </div>
  )
}

export default Header