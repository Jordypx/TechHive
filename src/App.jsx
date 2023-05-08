
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header"
import Home from "./components/Home"


function App() {
  return (
    <Router>
    <div className="">
      <Header/>

      <Routes>
        <Route path='/checkout'/>
        <Route path='/' element={<Home />} />
      </Routes>

     </div>
     </Router>
  )
}

export default App
