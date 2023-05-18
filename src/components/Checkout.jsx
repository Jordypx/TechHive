import CheckoutProduct from "./CheckoutProduct";

import { useStateValue } from "../contexts/StateProvider";
import Subtotal from "./Subtotal";




const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket)

  return (
    <div className="checkout">
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

          


          <div className="">
          <Subtotal />
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default Checkout;
