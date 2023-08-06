import { useStateValue } from "../contexts/StateProvider";
import { RiStarSFill } from "react-icons/ri";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const InfoImage = ({ id, title, image, price, rating, description }) => {
  const [{ baskets }, dispatch] = useStateValue();

  return (
    <div className="">
      <div className="back-to-home">
        <Link to="/">
          <div className="back-icon">
            <BsArrowLeft />
          </div>
        </Link>
      </div>
      <div className="details-container flex">
        <div className="buds-image">
          <img className="" src={image} alt="" />
        </div>

        <div className="details">
          <h1>{title}</h1>

          <div className="description">
            <p>{description}</p>
          </div>

          <div className="review flex gap-1 mt-2">
            <div className="stars flex mt-1.5">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <RiStarSFill key={`${id}-${i}`} />
                ))}
            </div>
            <span className="mb-4">(128)</span>
          </div>

          <div className="pricing-discount">
            <p className="">
              <small className="text-lg font-bold">$</small>
              <strong className="text-lg">
                {price}
                <span className="ml-1">or 99.99/month</span>
              </strong>
            </p>

            <span className="text-xs font-semibold">
              suggested payments with 6 months special financing
            </span>
          </div>

          <div className="counters mt-28">
            <div className="flex gap-9">
              <div className="counts flex">
                <FiMinus className="mt-1 ml-1 cursor-pointer" />
                <div className="text-base">0</div>
                <FiPlus className="mt-1 ml-1 cursor-pointer" />
              </div>

              <p>
                Only <span>12items</span> left! <br /> Don't miss it
              </p>
            </div>

            <div className="buy addtocart flex">
              <div className="purchase">
                <button>Buy Now</button>
              </div>

              <div className="addcart">
                <button>Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoImage;
