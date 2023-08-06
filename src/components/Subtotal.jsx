import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../contexts/reducer";
import { useNavigate } from "react-router-dom";

import { useStateValue } from "../contexts/StateProvider";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();

  return (
    <div className="subtotal font-semibold mr-2">
      <div className="border-contain">
        <div className="head">
          <h1>CART SUMMARY</h1>
        </div>
      </div>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Items ({basket.length}) <br />
              Subtotal <strong className="ml-1">{value}</strong>
            </p>

            <button onClick={(e) => navigate("/payment")}>
              CHECKOUT({value})
            </button>
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
};

export default Subtotal;
