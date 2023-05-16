import CheckoutProduct from "./CheckoutProduct";

import { useStateValue } from "../contexts/StateProvider";
import Subtotal from "./Subtotal";


const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="shippingContainer">
        <div className="container-description p-6">
          <div className="">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>


          <div className="">
          <Subtotal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
