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
  const [cartItems, setCartItems] = useState();

  function groupArrayByName() {
    const groupedArray = {};
    items.forEach((item) => {
      const { link } = item;
      if (groupedArray[link]) {
        groupedArray[link].push(item);
      } else {
        groupedArray[link] = [item];
      }
    });
    return Object.values(groupedArray);
  }

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
        items: cartItems,
        totalAmount: total,
        totalItems: items.length,
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
    setCartItems(groupArrayByName());
  }, [items]);
  return (
    <>
      <button onClick={()=> window.history.back() } className=" mx-3 rounded-md text-white sm:ml-14 mt-2 sm:mt-20 px-3 py-2 bg-slate-500" >Back</button>
      
      <div className="text-center">
        <p className="text-2xl pt-5">Order Your Cart Items</p>
        <div>
          <p>Total Items : {items.length}</p>
          <p>Total Amount : ₹ {total}</p>
        </div>
        {items.length ? (<button
          onClick={() => handleCreateOrder()}
          className="bg-green-700 rounded-md mt-2 py-2 px-5 font-semibold text-white"
        >
          Confirm Order
        </button>) : 
          (
            <button
          onClick={() => navigate('/')}
          className="bg-green-700 rounded-md mt-2 py-2 px-5 font-semibold text-white"
        >
          Find Food and Add
        </button>
        )}
      </div>

      <div className="card border-5 rounded-md m-3 ">
        {cartItems?.map((restaurant) => {
          return (
            <div className="card flex mx-1 my-1 sm:mx-80 p-2">
              <p className="font-semibold flex justify-between">
                <span>From : {restaurant[0].link} </span>
                <span>Items : {restaurant.length}</span>
              </p>
              <div className="flex justify-center flex-wrap">
                {restaurant?.map((item) => {
                  return (
                    <>
                      <div className="card p-2 sm:p-4 m-3 flex flex-row sm:flex-row align-center sm:justify-start ">
                        <div className=" items-center w-20 sm:px-0">
                          <img className="w-20" src={item.img} alt={item.id} />
                        </div>
                        <div>
                          <p className="text-left pl-1 font-bold">{item.name}</p>
                          {item.extra?(<p className="text-left pl-1">{item.extra} </p>):('')}
                          <p className="text-left pl-1"></p>
                          <p className="w-40 pl-1">₹ {item.price}</p>
                          <div>
                            <p
                              onClick={() => handleDeleteCart(item.id)}
                              className=" py-1 cursor-pointer px-2 ml-1 text-right "
                            >
                              Remove
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
