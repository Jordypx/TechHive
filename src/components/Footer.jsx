const Footer = () => {
    return ( 
        <div className="">
            <div className="headservices">
                <h1>Services to help you shop</h1>
                </div>
                <div className="services">
                    <div className="frequent">
                        <div className="questions">
                            <p>Frequently Asked Question</p>
                        </div>
                        <div className="question-pic">
                        <img src="./Questions.png" alt="" />
                        </div>
                    </div>
                    <div className="Pay">
                        <div className="Online">
                            <p>Online Payments</p>
                        </div>
                        <div className="online-image">
                            <img className="text-black" src="payments.png" alt="" />
                        </div>
                    </div>
                    <div className="">
                        <div className="delivery">
                            <p>Home Delivery</p>
                        </div>
                        <div className="home-image">
                            <img src="./grab-delivery.jpg" alt="" />
                        </div>
                    </div>
                </div>
        </div>
     );
}
 
export default Footer;