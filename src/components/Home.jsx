import Products from "../components/Products"



const Home = () => {
    return ( 
        <div className="Home">
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
            <Products title="Beats Headphone" description="brand new beats headphone with discount" price={150.99}
            image="./beats.png"
            rating={5}/>
            </div>
        </div>
     );
}
 
export default Home;


  