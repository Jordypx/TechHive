const Footer = () => {
    return ( 
        <div className="">
            <div className="heading">
                <h1>Services to help you shop</h1>

                <div className="sevices">
                    <div className="">
                        <div className="questions">
                            <p>Frequently Asked Question</p>
                        </div>
                        <div className="question-image">
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
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;