import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, reset } from "../store/cartSlice";
import { message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);

  const handleDeleteCart = (item) => {
    dispatch(remove(item));
    message.success("Removed Successfully");
  };

  const getTotalAmount = () => {
    let t = 0;
    for (let i = 0; i < items.length; i++) {
      t = t + items[i].price;
    }
    return t;
  };

  const handleCreateOrder = async () => {
    try {
      const res = await axios.post("/api/v1/create/order", {
        items: items,
        total: total,
      });
      if (res.data.success === true) {
        navigate("/");
        dispatch(reset());
        message.success("Ordered Successfully");
      }
    } catch (error) {
      console.log("Error in creating Order");
    }
  };

  useEffect(() => {
    setTotal(getTotalAmount());
  }, [items]);
  return (
    <>
      <div>
        <div className="m-10">
          <p className="text-xl font-semibold">Checkout</p>

          <p className="px-10 py-3 font-normal">Cart Value : {total}</p>
          <button
            className="btn btn-success"
            onClick={() => handleCreateOrder()}
          >
            {" "}
            Confirm Order
          </button>
        </div>
        <div className="md:mx-80 ">
          {items.map((item) => {
            return (
              <div className="card m-2 flex-col justify-center md:flex-row  md:justify-between">
                <div style={{ width: "130px", height: "130px" }}>
                  <img className="w-full " src={item.img} />
                </div>
                <div className="justify-center flex-row m-3 md:justify-between md:w-2/3">
                  <div className="wrap from-neutral-700 font-semibold">
                    {item.name}
                  </div>
                  <div className=" font-bold py-1 ">₹ {item.price} </div>
                </div>
                <div>
                  <button
                    className=" m-3 px-4 btn btn-danger"
                    onClick={() => handleDeleteCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cart;
