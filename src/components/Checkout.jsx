import Payment from "./Payment";
import CurrencyFormat from "react-currency-format";

import { RiDeleteBin6Line } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb"

const Checkout = () => {
    return ( 
        <div className="checkout">
            <div className="shippingContainer">
            <div className="review-item">
                    <div className="container-description mt-2 p-9">
                    <div className="text">
                    <h1 className="font-semibold text-base mb-4">Review item And Shipping</h1>
                </div>

                        <div className="image-description flex gap-7">
                            <div className="headPhone-image">
                                <img src="./Max.png" alt="headpphone" />
                            </div>

                            <div className=" mt-12">
                                <h2 className="font-semibold">Airpods-Max</h2>
                                <p className="font-semibold">Color: <span className="text-sm font-medium">Pink</span></p>
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

                    <div className="delivery-info">
                        <div className="icon">
                            <TbTruckDelivery/>
                        </div>
                        <h3>Shipping Information</h3>

                        <div className="delivery-text">

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