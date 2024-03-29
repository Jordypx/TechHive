import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Checkout from "./components/Checkout";
import LoginPage from "./pages/LoginPage";
import OrdersLoginPage from "./components/OrdersLoginPage";
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import ImageDetails from "./components/ImageDetails";
import ProductSearch from "./components/ProductSearch";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51Ld0W4DtscEe2fhBO9jeaYOn4auNHromThfNkFopWxypn235sR1Y7P3JeONsBKUfoMskQ70y7pZEpJsH3w4hueoz00AejKckAb"
);

function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/Orders" element={<Orders />} />
          <Route path="/OrdersLoginPage" element={<OrdersLoginPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/product" element={<ProductSearch />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/imageInfo" element={<ImageDetails />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
