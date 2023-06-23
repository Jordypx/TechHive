import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

const order = ({ order }) => {
    return ( 
        <div className="order p-6 m-4 relative">
              <CurrencyFormat
                renderText={(value) => (
                  <h3 className="font-semibold text-lg">Total Purchase: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            <p className="text-right">{moment.unix(order.data.created).format("MMM Do YYYY, h:mma")}</p>

            <p className="order__id absolute top-10 right-5">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <div key={item.id} className="mt-3">
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  hideButton
                />
              </div>
            ))}
        </div>
     );
}
 
export default order;