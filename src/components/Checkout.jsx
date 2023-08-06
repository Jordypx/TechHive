import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";

import { useStateValue } from "../contexts/StateProvider";
import Subtotal from "./Subtotal";
import Header from "./Header";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="head">
        <Header />
      </div>

      {basket.length === 0 ? (
        <div className="empty-cart-message">
          <div className="message">
            <h1>Your cart is empty!</h1>

            <p>Browse our categories and discover our best deals!</p>
          </div>

          <Link to="/">
            <div className="back-home-btn">
              <button>START SHOPPING</button>
            </div>
          </Link>
        </div>
      ) : (
        <div className="shippingContainer">
          <div className="container-description p-6">
            <div className="">
              {basket.map((item) => (
                <div key={item.id}>
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                </div>
              ))}
            </div>

            <div className="subtotal-container">
              <Subtotal />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
