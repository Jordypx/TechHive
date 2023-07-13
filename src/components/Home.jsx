import Products from "../components/Products"
import Header from "../components/Header"
import Footer from "./Footer";



const Home = () => {
    return ( 

        <div className="Home">
           <div className="head">
            <Header/>
           </div>

             <div className="sub-container">
             <div className="container">
              <div className="home-discount">
                <h1>Grab Upto 25% Off On Selected Headphones</h1>
                <button>Buy Now</button>
              </div>

              <div className="home-image">
               <img src="./My project.png" alt="" />
              </div>
             </div>
             </div>

            <div className="products">
            <Products/>
            </div>

            <div className="footer">
              <Footer />
            </div>
        </div>
     );
}
 
export default Home;


 
   