import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../contexts/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Header from "./Header";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";

import { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../contexts/reducer";
import axios from "../AXIOS";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();


  const history = useNavigate();


  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("")

  useEffect(() =>{
//  generate the special stripe secret 

    const getClientSecret = async () => {
      const response = await axios.post({
        method: 'POST',
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
        amount: 1000,
        currency: 'usd'
      });
      setClientSecret(response.data.clientSecret);
    };


    getClientSecret();
  }, [basket])

  console.log( clientSecret)
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true)

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method:{
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
        //  payment confirmation

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        history.replace('/orders')

    })
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : '');
  };
  

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
            <p>
              Name:<span></span>
            </p>
            <p>{user?.email}</p>
            <p>123 React LANE</p>
            <p>LA, NIGERIA</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and Delivery</h3>
          </div>
          <div className="payment-items">
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

        <div className="patment__section flex">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>

          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <h3>Order Total: {value}</h3>
                  </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              /> 

              <button className="cursor-pointer" disabled={processing || disabled || succeeded}>
                <span>{processing ? <p>Processing</p>: "Pay"}</span>
              </button>
              </div>

                 {/* error */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
