import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { brandsItems } from "../data/brandsLists";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
import { pizzaSize } from "./../data/addons";
import { description } from "./../data/addons";

const SingleRestaurantPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const restaurantName = params.name;

  const [restaurant, setRestaurant] = useState();

  const getRestaurantDetails = () => {
    for (let i = 0; i < brandsItems.length; i++) {
      if (brandsItems[i].link === restaurantName) {
        setRestaurant(brandsItems[i]);
      }
    }
  };

  const handleAddToCart = (item, size, cheese) => {
    const arr = size.split(" ");

    let price = item.price;

    if (arr[0] === "Large") {
      price = item.price * 1.5;
    } else if (size === "Extra-Large") {
      price = item.price * 2;
    }

    if (cheese[0].checked) {
      price = price + 30;
      item = { ...item, extra: "with extra cheese ₹ 30" };
    }
    item = {
      ...item,
      size: size,
      price: price,
      name: item.name + " ( " + arr[0] + " ) ",
    };
    console.log(item);
    dispatch(add(item));
  };

  const additemToCart = (item) => {
    dispatch(add(item));
  };

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  return (
    <>
      <button onClick={()=> window.history.back() } className=" mx-3 rounded-md text-white sm:ml-14 mt-2 sm:mt-20 px-3 py-2 bg-slate-500" >Back</button>
      
      <div className="mt-8 px-2  sm:mx-28">
        <p className="text-2xl sm:text-4xl font-semibold tracking-wide sm:tracking-widest flex justify-between px-3 pt-3">
          <span className="py-1 text-3xl sm:text-4xl text-slate-800">
            {restaurant?.name}
          </span>
          <span className="block bg-green-500 px-2 text-white rounded-lg text-lg sm:text-1xl text-center tracking-tighter my-1 py-1">
            {restaurant?.rating} &#9733;
          </span>
        </p>
        <p className="text-slate-500 px-3">{restaurant?.tags}</p>
        <p className=" px-3 py-1 text-slate-600">
          Delivered within 30 minutes{" "}
          <span className="text-red-500 border px-2 rounded-full">
            &#x2713;
          </span>{" "}
        </p>

        {/* Orders Details Here */}
        <div className="px-3">
          <p className="pt-3 text-2xl text-red-400">Order Now </p>
          <hr />
          <div className="flex justify-center flex-wrap">
            {restaurant?.items.map((item) => {
              return (
                <>
                  <div
                    key={item.name}
                    className="card p-2 sm:p-4 m-3 flex flex-row sm:flex-row align-center sm:justify-start "
                  >
                    <div className=" items-center w-20 sm:px-0">
                      <img className="w-20" src={item.img} alt={item.id} />
                    </div>
                    <div className="ml-4">
                      <p className="text-left pl-1">{item.name}</p>

                      {/* <p className="w-40 pl-1">₹ {item.price} </p> */}

                      {item.type === "pizza" ? (
                        <>
                          <select
                            id={item.name}
                            key={item.name}
                            className=" mt-2"
                          >
                            {pizzaSize.map((size) => {
                              return (
                                <>
                                  <option>
                                    <p>
                                      <span>{size.name} </span>
                                      <span className="font-semibold ">
                                        {" "}
                                        ₹ {Math.round(size.price * item.price)}
                                      </span>
                                      
                                    </p>
                                  </option>
                                </>
                              );
                            })}
                          </select>
                          <div className="py-1">
                            <input
                              type="checkbox"
                              name={`${item.name}`}
                              value={30}
                            />
                            Add Extra Cheese ₹ 30
                          </div>
                          <span style={{display:'block',maxWidth:'250px'}}><span className="font-semibold">Description : </span> {description}</span>
                          <div>
                            <p
                              onClick={() =>
                                handleAddToCart(
                                  item,
                                  document.getElementById(`${item.name}`).value,
                                  document.getElementsByName(`${item.name}`)
                                )
                              }
                              className="btn btn-secondary py-1 px-2 ml-0 text-right "
                            >
                              Add
                            </p>
                          </div>
                          
                        </>
                      ) : (
                        <>
                          <p className="w-40 pl-1 mb-1">₹ {item.price} </p>
                          <div>
                            <p
                              onClick={() => additemToCart(item)}
                              className="btn btn-secondary py-1 px-2 ml-1 text-right "
                            >
                              Add
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleRestaurantPage;
