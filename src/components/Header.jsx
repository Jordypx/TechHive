import { RxPerson } from 'react-icons/rx'
import { BsSearch } from 'react-icons/bs'
import { BsCartPlus } from 'react-icons/bs'
import { BiPhone } from 'react-icons/bi'

const Header = () => {
  return (
    <div className="">
      <header className='head-content flex items-center justify-between p-1.5 m-0 text-white'>
        <div className="phone-number flex items-center gap-1 px-2">
          <BiPhone className='text-white text-xs' />
          <i>+234 975645636</i>
        </div>
        <div className="discount">
          <p>Get 50% off on selected items <i className=''>|</i> <span className='ml-2'>Buy Now</span></p>
        </div>
        <div className="blog-contact px-2 cursor-pointer">
          <i className='mr-3'>Blog</i>
          <i>Location</i>
        </div>
      </header>
    </div>
   
  )
}

export default Header