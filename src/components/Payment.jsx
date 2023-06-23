import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../contexts/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Header from "./Header";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";

import { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../contexts/reducer";
import axios from "../AXIOS";

import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../firebase/Firebase.js";


const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();


  const navigate = useNavigate();


  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("")

  useEffect(() =>{
//  generate the special stripe secret 

const getClientSecret = async () => {
  const response = await axios.post(
    `/payments/create?total=${getBasketTotal(basket) * 100}`
  );
  setClientSecret(response.data.clientSecret);
};

    getClientSecret();
  }, [basket])

  console.log("the secret is", clientSecret)
  console.log('back', user)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
  
    try {
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      });
  
      await setDoc(doc(db, 'users', user?.uid, 'orders', paymentIntent.id), {
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created
      });
  
      setSucceeded(true);
      setError(null);
      setProcessing(false);
  
      dispatch({
        type: 'EMPTY_BASKET'
      });
  
      navigate('/Orders');
    } catch (error) {
      if (error.code === 'payment_intent_unexpected_state') {
        // Handle error if the payment couldn't be confirmed
        console.log('Error confirming payment:', error);
        setError('Error confirming payment. Please try again.');
      } else {
        // Handle error if the payment details couldn't be saved
        console.log('Error saving payment details:', error);
        setError('Error saving payment details. Please try again.');
      }
  
      setProcessing(false);
    }
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
              key={item.id}
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
                <span>{processing ? <p>Processing...</p>: "Pay"}</span>
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
