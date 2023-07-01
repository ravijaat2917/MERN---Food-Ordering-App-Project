import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import { message } from "antd";

const Cart = () => {
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
  useEffect(() => {
    setTotal(getTotalAmount());
  }, [items]);
  return (
    <>
      <div>
        <div className="m-10">
          <p className="text-xl font-semibold">Checkout</p>

                  <p className="px-10 py-3 font-normal">Cart Value : {total}</p>
                  <button className="btn btn-success"> Confirm Order</button>
        </div>
        <div className="m-5 max-w-3xl ">
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
                    className=" m-3 px-4 btn btn-primary"
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
