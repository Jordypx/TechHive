import Payment from "./Payment";
import CurrencyFormat from "react-currency-format";

import { RiDeleteBin6Line } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb"

const Checkout = () => {
    return ( 
        <div className="checkout">
            <div className="shippingContainer">
            <div className="review-item">
                <div className="container-description p-6">

                <div className="text">
                    <h1 className="font-bold text-lg">Review item And Shipping</h1>
                </div>
                      
                    <div className="flex gap-28">

                        <div className="image-description flex gap-7">
                            <div className="headPhone-image">
                                <img src="./Max.png" alt="headpphone" />
                            </div>

                            <div className=" mt-1">
                                <h2 className="font-semibold">Airpods-Max</h2>
                                <p className="font-semibold">Color: <span className="text-sm font-medium">Pink</span></p>

                        <div className="delete-item mt-24">
                            <button className="flex items-center">Remove Item
                            <RiDeleteBin6Line className="icon"/></button>
                        </div>

                            </div>
                            
                        </div>

                        <div className="subtotal font-semibold mr-2">
                            <CurrencyFormat
                             renderText={(value) => (
                                <>
                                <p>
                                    Subtotal (0 items): <strong>{ ` ${value}`}</strong>
                                </p>
                                <small className="Subtotal__gift">
                                    <input type="checkbox" className="cursor-pointer" /> Coupon
                                </small>
                                </>
                             )}
                             decimalScale={2}
                             value={0}
                             displayType={"text"}
                             thousandSeparator={true}
                             prefix={"$"}


                             nnfojoiwijoowwr
                             />
                        </div>

                     

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