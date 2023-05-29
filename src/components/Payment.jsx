import { Link } from "react-router-dom";
import { useStateValue } from "../contexts/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Header from "./Header";

const Payment = () => {
  const [{basket, user}, dispatch] = useStateValue();

  return (
    <div className="payment">
    <Header />

      <div className="payment__container">
         <h1>
            Checkout (<Link to="/checkout">{basket?.length} items</Link>)
         </h1>

        <div className="payment__section">
            <div className="payment__title">
                <h3>Delivery Information</h3>
            </div>
            <div className="payment__address">
                <p>{user?.email}</p>
                <p>123 React LANE</p>
                <p>LA, NIGERIA</p>
            </div>
        </div>

        <div className="payment__section">
            <div className="payment__title">
                <h3>Review items and Delivery</h3>
            </div>
            <div className="payment__items">
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
        </div>

        <div className="patment__section">
        <div className="payment__title">
                <h3>Payment Method</h3>
            </div>

        <div className="payment__details">

        </div>
        </div>
      </div>
    </div>
    
  );
};

export default Payment;
