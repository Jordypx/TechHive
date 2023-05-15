import { RiDeleteBin6Line } from "react-icons/ri";
import { RiStarSFill } from 'react-icons/ri'

const CheckoutProduct = ({ id, title, image, price, rating }) => {
  return (
    <div className="">
      <div className="checkout-image">
        <img src={image} alt="" />
      </div>

      <div className="info">
        <p>{title}</p>

        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="review flex gap-2">
          <div className="stars flex">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <RiStarSFill key={i} />
              ))}
          </div>

        </div>
        <div className="delete_btn">
            <button className="">Remove item<RiDeleteBin6Line /></button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
