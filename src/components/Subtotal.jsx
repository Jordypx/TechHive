import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../contexts/reducer";

import { useStateValue } from "../contexts/StateProvider";

const Subtotal = () => {
    
    const [{ basket }, dispatch] = useStateValue();

    return ( 
         <div className="subtotal font-semibold mr-2">
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <p>
                      Quantity ({basket.length} items) <br/>
                      Amount: <strong>{value}</strong>
                    </p>
                  </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </div> 
     );
}
 
export default Subtotal;