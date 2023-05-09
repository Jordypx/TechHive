import Payment from "./Payment";

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

                        <div className="Item-price">
                            <span><strong>$</strong>549.00</span>
                            <p>Quality: <span>0</span></p>
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