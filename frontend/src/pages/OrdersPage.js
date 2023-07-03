import React, { useEffect, useState } from "react";
import axios from "axios";

const OrdersPage = () => {
  const [orders, setOrders] = useState();

  const getOrders = async () => {
    try {
      const res = await axios.get("/api/v1/get/orders");
      if (res.data.success) {
        setOrders(res.data.orders);
        console.log(res.data.orders);
      }
    } catch (error) {
      console.log(error);
    }
  };

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <button onClick={()=> window.history.back() } className=" mx-3 rounded-md text-white sm:ml-14 mt-2 sm:mt-20 px-3 py-2 bg-slate-500" >Back</button>
      
      <div
        className="flex sm:mx-20  lg:mx-40  xl:mx-96  flex-col justify-center "
        style={{ minHeight: "80vh" }}
      >
        <div>
          <h4 className="text-3xl p-2 mt-5 text-center my-3 sm:text-left from-neutral-800 font-semibold">
            {" "}
            All Orders
          </h4>
        </div>
        <div
          className=" mb-10"
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
          }}
        >
          {orders?.map((order) => {
            return (
              <div
                className="card mb-3 border-2 shadow-xl m-4 sm:mx-10 p-2"
                // style={{ maxWidth: "550px" }}
                key={order._id}
              >
                <div>
                  <p className="flex justify-between px-2">
                    <span className="text-md ">
                      {" "}
                      <span className="font-semibold">Ordered on </span>
                      {order.createdAt.slice(0, 10)}
                    </span>
                    <span className="text-md ">
                      {" "}
                      <span className="font-semibold">Total Items </span>
                      {order.totalItems}
                    </span>
                  </p>

                  <p className="flex justify-between px-2 py-1">
                    <span className="text-md ">
                      {" "}
                      <span className="font-semibold">Delivered in </span>
                      {order.deliveryTime ? (
                        <>{order.deliveryTime}</>
                      ) : (
                        getRndInteger(10, 29)
                      )}{" "}
                      min.
                    </span>
                    <span>
                      {" "}
                      <span className="font-semibold">Total Amount </span>₹{" "}
                      {order.totalAmount}
                    </span>
                  </p>
                </div>
                <div className="">
                  {order.items.map((items) => {
                    return (
                      <div className="card p-1 m-1 ">
                        <p className="flex justify-between px-2 py-1">
                          <span>From : {items[0].link}</span>
                          <span>Items : {items.length}</span>
                        </p>
                        <div>
                          {items.map((item) => {
                            return (
                              <div className="flex w-full justify-between">
                                <div className="w-12 ml-2">
                                  <img src={item.img} alt={item.name}></img>
                                </div>
                                {item.extra ? (
                                  <>
                                    <div className="py-1 pl-2 w-3/5 ">
                                      <p className="">{item.name}</p>
                                      {item.extra ? <p>{item.extra}</p> : ""}
                                    </div>
                                  </>
                                ) : (
                                  <div className="py-3 pl-2 w-3/5 block overflow-hidden max-h-10">
                                    <p>{item.name}</p>
                                  </div>
                                )}

                                <div className="py-3 pr-2 text-right">
                                  <p>₹ {item.price}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OrdersPage;
