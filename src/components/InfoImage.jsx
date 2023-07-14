import { useStateValue } from "../contexts/StateProvider";
import { RiStarSFill } from 'react-icons/ri'
import { FiMinus } from 'react-icons/fi'
import { FiPlus } from 'react-icons/fi'

const InfoImage = ({ id, title, image, price, rating, description }) => {
    const [{ baskets }, dispatch] = useStateValue();

    return (
     <div className="">
      <div className="details-container flex">
      <div className="buds-image">
          <img className="" src={image} alt="" />
        </div>
  
        <div className="details mt-8">
          <h1>{title}</h1>
  
          <div className="description">
            <p>{description}</p>
          </div>
  
          <div className="review flex gap-2 mb-4">
            <div className="stars flex">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <RiStarSFill key={`${id}-${i}`} />
                ))}
            </div>
          </div>
  
          <p className="mb-1">
            <small className="text-lg font-bold">$</small>
            <strong className="text-lg">{price}<span className="ml-1">or 99.99/month</span></strong>
          </p>

          <div className="counter mt-28">
            <div className="flex">
                <div className="counts flex">
                <FiMinus /><div className="">0</div><FiPlus />
                </div>

                <p>Only 12items left! <br /> Don't miss it</p>
            </div>

            <div className="buy addtocart flex">
                <div className="purchase">
                    <button>Buy Now</button>
                </div>

                <div className="addcart">
                    <button>Add To Carts</button>
                </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      );
}
 
export default InfoImage;