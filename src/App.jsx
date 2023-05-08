
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header"
import Home from "./components/Home"


function App() {
  return (
    <Router>
    <div className="">
      <Switch>
        <Route path="/checkout">
          <Header />
        </Route>
        <Route path="/">
        <Header />
        <Home />   
        </Route>
      </Switch>
     </div>
     </Router>
  )
}

export default App
