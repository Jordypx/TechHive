import { useStateValue } from "../contexts/StateProvider";
import Header from "./Header";
import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/Firebase";
import Order from "./Order";

const Orders = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

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

      <div className="orders__order">
        {orders?.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;






// import { useStateValue } from "../contexts/StateProvider";
// import Header from "./Header";
// import { useState, useEffect } from "react";
// import { db } from "../firebase/Firebase";
// import Order from "./Order";


// const Orders = () => {
//     const [{ basket, user }, dispatch] = useStateValue();
//     const [orders, setOrders] = useState([]);

//     useEffect(() => {

//     if(user) {
//        db.collection('users')
//        .doc(user?.uid)
//        .collection('orders')
//        .orderBy('created', 'desc')
//        .onSnapshot(snapshot => {
//          setOrders(snapshot.docs.map(doc => ({
//             id: doc.id,
//             data: doc.data()
//          })))
//        })
//      } else {
//           setOrders([])
//        }

//     }, [user])

//     return ( 
//         <div className="">
//             <Header />
            
//             <div className="orders__order">
//                 {orders?.map(order => (
//                     <Order order={order} />
//                 ))}
//             </div>
//         </div>
//      );
// }
 
// export default Orders;