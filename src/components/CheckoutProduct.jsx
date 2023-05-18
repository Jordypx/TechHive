import { RiDeleteBin6Line } from "react-icons/ri";
import { RiStarSFill } from 'react-icons/ri'

const CheckoutProduct = ({ id, title, image, price, rating }) => {
  return (
    <div className="flex gap-8 items-center">
      <div className="checkout-image">
        <img className="mb-9" src={image} alt="" />
      </div>

      <div className="info mb-8">
        <p className="text-sm font-semibold">{title}</p>

        <p className="mb-1">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="review flex gap-2 mb-1">
          <div className="stars flex">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <RiStarSFill key={id} />
              ))}
          </div>

        </div>
        <div className="delete_btn">
            <button className="flex gap-1 text-xs mt-1">Remove item<RiDeleteBin6Line className="btn_delete"/></button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
