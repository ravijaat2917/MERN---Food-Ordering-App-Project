import React, { useEffect, useState } from "react";
import axios from "axios";

const OrdersPage = () => {
  const [orders, setOrders] = useState();

  const getOrders = async () => {
    try {
      const res = await axios.get("/api/v1/get/orders");
      if (res.data.success) {
        setOrders(res.data.orders);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <h4 className="text-3xl p-2 text-center from-neutral-800 font-semibold">
        {" "}
        All Orders
      </h4>
      <div
        className="md:mx-80  flex flex-col justify-center"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {orders?.map((order) => {
          return (
            <div className="card max-w-x px-3 md:px-7  py-2 m-3 ">
              <p className="flex justify-between">
                <span className="font-semibold">
                  Ordered on: {order.createdAt.slice(0, 10)}{" "}
                </span>{" "}
                <span className="font-semibold">
                  Total Amount: ₹ {order.total}
                </span>
              </p>
              <p>Total Items : {order.items.length}</p>
              {order.items.map((item) => {
                return (
                  <div className="card m-2 flex-row justify-start md:flex-row  md:justify-between">
                    <div style={{ width: "50px", height: "50px" }}>
                      <img style={{ width: "70px" }} src={item.img} />
                    </div>
                    <div className="justify-start flex-col mx-1 text-ellipsis  md:w-4/5 md:text-left">
                      <div className="wrap block from-neutral-700 font-normal text-ellipsis">
                        {item.name}
                      </div>
                      <div className=" font-semibold  ">₹ {item.price} </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OrdersPage;
