import Payment from "./Payment";
import CurrencyFormat from "react-currency-format";

import { RiDeleteBin6Line } from "react-icons/ri";

const Checkout = () => {
    return ( 
        <div className="checkout">
            <div className="shippingContainer flex">
            <div className="review-item">
                <div className="text">
                    <h1>Review item And Shipping</h1>
                </div>
                    <div className="container-description">

                        <div className="image-description flex">
                            <div className="headPhone-image">
                                <img src="./Max.png" alt="headpphone" />
                            </div>

                            <div className="context">
                                <h2>Airpods-Max</h2>
                                <p>Color:<i>Pink</i></p>
                            </div>
                        </div>

                        <div className="subtotal">
                            <CurrencyFormat
                             renderText={(value) => (
                                <>
                                <p>
                                    Subtotal (0 items): <strong>{ ` ${value}`}</strong>
                                </p>
                                <small className="Subtotal__gift">
                                    <input type="checkbox" /> Coupon
                                </small>
                                </>
                             )}
                             decimalScale={2}
                             value={0}
                             displayType={"text"}
                             thousandSeparator={true}
                             prefix={"$"}
                             />
                        </div>

                        <div className="delete-item">
                            <button className="flex items-center">Remove Item <RiDeleteBin6Line/></button>
                        </div>
                    </div>
            </div>

            <div className="pay">
                <Payment />
            </div>
        </div>
        </div>
     );
}
 
export default Checkout;