import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header"
import Home from "./components/Home"
import Checkout from "./components/Checkout";
import LoginPage from "./pages/LoginPage";


function App() {
  return (
    <Router>
    <div className="">
      <Header/>

      <Routes>
      <Route path='/Login' element={<LoginPage />}/>
        <Route path='/checkout' element={<Checkout />}/>
        <Route path='/' element={<Home />} />
      </Routes>

     </div>
     </Router>
  )
}

    


export default App;