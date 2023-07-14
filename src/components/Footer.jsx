import { BsInstagram } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
import { BsYoutube } from "react-icons/bs"

const Footer = () => {
  return (
    <div className="">
      <div className="headservices">
        <h1>Services to help you shop</h1>
      </div>
      <div className="services">
        <div className="frequent">
          <div className="questions">
            <p className="text-lg font-bold">
              Frequently Asked Question <br />{" "}
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
              Online Payments <br />{" "}
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
              Home Delivery <br />{" "}
              <span className="text-sm">Delivered To You Between 1-2 Days</span>
            </p>
          </div>
          <div className="home-image">
            <img src="./grab-delivery.jpg" alt="" />
          </div>
        </div>
      </div>

      <footer className="new_footer_area bg_color">
        <div className="new_footer_top">
          <div className="container">
            <div className="row flex gap-36">
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget company_widget wow fadeInLeft"
                  data-wow-delay="0.2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.8s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <h3 className="f-title f_600 t_color f_size_18">
                    Get in Touch
                  </h3>
                  <p>
                    Don’t miss any updates of <br /> our new templates and extensions.!
                  </p>
                  <form
                    action="#"
                    className="f_subscribe_two mailchimp"
                    method="post"
                    noValidate
                    _lpchecked="1"
                  >
                    <input
                      type="text"
                      name="EMAIL"
                      className="form-control memail"
                      placeholder="Email"
                    />
                    <button className="btn btn_get btn_get_two" type="submit">
                      Subscribe
                    </button>
                    <p className="mchimp-errmessage" style={{ display: 'none' }}></p>
                    <p className="mchimp-sucmessage" style={{ display: 'none' }}></p>
                  </form>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.8s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <h3 className="f-title f_600 t_color f_size_18">Download</h3>
                  <ul className="list-unstyled f_list">
                    <li>
                      <a href="#">Company</a>
                    </li>
                    <li>
                      <a href="#">Android App</a>
                    </li>
                    <li>
                      <a href="#">ios App</a>
                    </li>
                    <li>
                      <a href="#">Desktop</a>
                    </li>
                    <li>
                      <a href="#">Projects</a>
                    </li>
                    <li>
                      <a href="#">My tasks</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.6s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.8s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                  <ul className="list-unstyled f_list">
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Term &amp; conditions</a>
                    </li>
                    <li>
                      <a href="#">Reporting</a>
                    </li>
                    <li>
                      <a href="#">Documentation</a>
                    </li>
                    <li>
                      <a href="#">Support Policy</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget social-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.8s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.8s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <h3 className="f-title f_600 t_color f_size_18">
                    Team Solutions
                  </h3>
                  <div className="f_social_icon">
                    <a href="#" className=""><BsInstagram className="ml-2 mt-2"/></a>
                    <a href="#" className=""><BsTwitter className="ml-2 mt-2"/></a>
                    <a href="#" className=""><FaFacebookF className="ml-2 mt-2"/></a>
                    <a href="#" className=""><BsYoutube className="ml-2 mt-2"/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bg">
            <div className="footer_bg_one"></div>
            <div className="footer_bg_two"></div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-7">
                <p className="mb-0 f_400">
                  © TechHive Inc.. 2023 All rights reserved.
                </p>
              </div>
              <div className="col-lg-6 col-sm-5 text-right">
                <p>
                  Made with <i className="icon_heart"></i> in
                  <a href="" target="_blank">
                    TechHive
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
