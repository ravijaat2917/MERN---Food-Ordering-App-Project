import React from "react";
import { dishData } from "../data/inspirationOrderData";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="md:px-20" style={{ backgroundColor: "#F8F8F8" }}>
        <p className="md:text-4xl  text-center sm:text-left  text-xl font-normal font-serif pt-4 tracking-wider">
          Inspiration for your first order
        </p>
        <div className="flex flex-wrap flex-row justify-between ">
          {dishData.map((item) => {
            return (
              <div
                onClick={() => navigate(`${item.link}`)}
                className="mt-4 cursor-pointer w-15 sm:w-40"
              >
                <img
                  src={item.img}
                  alt={item.link}
                  className="rounded-full w-20 sm:w-40"
                />
                <p className="text-center">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="md:mx-60">
        <p className="text-3xl font-normal font-serif mt-4 tracking-wider">
          Top brands for you
        </p>
      </div>
      <div className="md:mx-60">
        <p className="text-3xl font-normal font-serif mt-4 tracking-wider">
          Delivery Restaurants
        </p>
      </div>
    </>
  );
};

export default Homepage;
