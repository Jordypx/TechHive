
const Header = () => {
  return (
    <div className='Header h-16 flex items-center bg-green-800 sticky top-0'>
      <div className="logo">
        <>TechHive</>
      </div>

      <div className="header__search">
        <input type="text" className="headeer__searchInput" name=""/>

      </div>

      <div className="header___nav flex ">
        <div className="header__signIn">
          <span className="user">Hello Guest</span>
          <span className="signIn">Sign In</span>
        </div>

        <div className="header__orders">
        <span className="returns">Returns</span>
          <span className="orders">& orders</span>
        </div>

        <div className="header__Cart">
        <span className="user">Your</span>
          <span className="signIn">Prime</span>
        </div>   
 
      </div>
    </div>
  )
}

export default Header