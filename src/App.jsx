import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./components/Home"
import Checkout from "./components/Checkout";
import LoginPage from "./pages/LoginPage";
import Payment from "./components/Payment"




function App() {
  return (
    <Router>
    <div className="">

      <Routes>
        <Route path='/Login' element={<LoginPage />}/>
        <Route path='/checkout' element={<Checkout />}/>
        <Route path='/' element={<Home />}/>
        <Route path="/payment" element={<Payment />}/>
      </Routes>

     </div>
     </Router>


     
  )
}
 
export default App; 


