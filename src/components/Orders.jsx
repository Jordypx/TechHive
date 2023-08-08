import { useStateValue } from "../contexts/StateProvider";
import Header from "./Header";
import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/Firebase";
import Order from "./Order";
import { auth } from "../firebase/Firebase";
import { Link } from "react-router-dom";

const Orders = () => {
  const [users, setUser] = useState(null);
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscriber = auth.onAuthStateChanged((user) => {
      setUser(users);

      if (!user) {
        // Redirect to signin page if the user is not signed in
        navigate("/OrdersLoginPage");
      }
    });

    return () => {
      unsubscriber(); // Cleanup the listener when the component unmounts
    };
  }, [navigate]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (user) {
        const q = query(
          collection(db, "users", user?.uid, "orders"),
          orderBy("created", "desc")
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });

        return () => {
          unsubscribe(); // Cleanup the listener when the component unmounts
        };
      } else {
        setOrders([]);
      }
    };

    fetchOrders();
  }, [user]);

  return (
    <div className="">
      <Header />

      {orders.length === 0 ? (
        <div className="empty-orders-message">
          <div className="message">
            <h1>You have placed no orders yet!</h1>

            <p>
              All your orders will be saved here for you to access their state.
            </p>
          </div>

          <Link to="/">
            <div className="back-home-btn">
              <button>CONTINUE SHOPPING</button>
            </div>
          </Link>
        </div>
      ) : (
        <div className="orders__order">
          {orders?.map((order) => (
            <Order key={order.id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
