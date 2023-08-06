import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="mt-9">
      <div className="headservices">
        <h1>Services to help you shop</h1>
      </div>
      <div className="services">
        <div className="frequent">
          <div className="questions">
            <p className="text-lg font-bold">
              Frequently Asked Question <br />
              <span className="text-sm">
                How Long Does It Take To Get To Me
              </span>
            </p>
          </div>
          <div className="question-pic">
            <img src="./Questions.png" alt="" />
          </div>
        </div>
        <div className="Pay">
          <div className="Online">
            <p className="text-lg font-bold">
              Online Payments <br />
              <span className="text-sm">Pay Online, It's Easy!</span>
            </p>
          </div>
          <div className="online-image">
            <img className="text-black" src="payments.png" alt="" />
          </div>
        </div>
        <div className="home">
          <div className="delivery">
            <p className="text-lg font-bold">
              Home Delivery <br />
              <span className="text-sm">Delivered To You Between 1-2 Days</span>
            </p>
          </div>
          <div className="home-image">
            <img src="./grab-delivery.jpg" alt="" />
          </div>
        </div>
      </div>

      <footer className="">
        <div className="footer-container">
          <div className="logo">
            <h1 className="text-white">TECHIVE</h1>
          </div>

          <div className="footer-info">
            <div className="info">
              <h1>NEW TO TECHIVE?</h1>
              <p>
                Subscribe to our newsletter to get updates on our latest offers!
              </p>
            </div>
            <div className="addressEmailcense flex gap-5">
              <form>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your E-mail"
                />
              </form>

              <div className="select-sex-button flex gap-4">
                <button>Male</button>
                <button className="">Female</button>
              </div>
            </div>
          </div>

          <div className="download-offers">
            <h1>Get New Features On Techive</h1>
          </div>
        </div>
        <div className="subfooter-container">
          <div className="box-container">
            <div className="box">
              <h3>Location</h3>
              <a href="#">USA</a>
              <a href="#">Japan</a>
              <a href="#">Nigeria</a>
              <a href="#">Germany</a>
            </div>

            <div className="box">
              <h3>quick links</h3>
              <a href="#">Home</a>
              <a href="#">menu</a>
              <a href="#">about</a>
              <a href="#">reviewws</a>
            </div>

            <div className="box">
              <h3>Contact-info</h3>
              <a href="#">+123-456-7890</a>
              <a href="#">+111-222-3333</a>
              <a href="#">Techive@gmail.com</a>
              <a href="#">wale, UK - 100204</a>
            </div>

            <div className="box">
              <h3 className="logo">follow us</h3>
              <div className="logo-icon">
                <a href="#">
                  <BsInstagram />
                </a>
                <a href="#">
                  <BsTwitter />
                </a>
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <BsYoutube />
                </a>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="credit">
              copyright @ 2022 by <span>Techive</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
