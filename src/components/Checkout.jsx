import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "./CheckoutProduct";


import { useStateValue } from "../contexts/StateProvider";
import { getBasketTotal } from "../contexts/reducer";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="shippingContainer">
          <div className="container-description p-6">
            {/* <div className="text">
              <h1 className="font-bold text-lg">Review item And Shipping</h1>
            </div> */}

            <div className="">
              {basket.map(item => (
                <CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}/>
              ))}
            </div>

        </div>


        <div className="subtotal font-semibold mr-2">
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <p>
                      Quantity ({basket.length} items) <br/>
                      Amount: <strong>{value}</strong>
                    </p>
                  </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </div>

  </div>
    </div>

    
  );
};

export default Checkout;
