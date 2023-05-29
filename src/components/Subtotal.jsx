import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../contexts/reducer";
import { useNavigate } from "react-router-dom";

import { useStateValue } from "../contexts/StateProvider";

const Subtotal = () => {
    
    const [{ basket }, dispatch] = useStateValue();
    const navigate = useNavigate();

    return ( 
         <div className="subtotal font-semibold mr-2">
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <p>
                      items: ({basket.length} items) <br/>
                      subtotal: <strong>{value}</strong>
                    </p>
                  </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />

              <button onClick={e => navigate('/payment')}>checkout</button>
            </div> 
     );
}
 
export default Subtotal;