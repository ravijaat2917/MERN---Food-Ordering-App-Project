import React from "react";
import { dishData } from "../data/inspirationOrderData";
import { useNavigate } from "react-router-dom";
import BuyWithBrandName from "../Components/BuyWithBrandName";
import BestFoodComponent from "../Components/BestFoodComponent";
import { brandsItems } from "./../data/brandsLists";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="md:px-20 py-3" style={{ backgroundColor: "#F8F8F8" }}>
        <p className="sm:text-4xl  text-center sm:text-left  text-xl font-normal font-serif pt-4 tracking-wider">
          Inspiration for your first order
        </p>
        <div className="flex flex-wrap max-h-36 overflow-hidden sm:max-h-full flex-row justify-between ">
          {dishData.map((item) => {
            return (
              <div
                onClick={() => navigate(`filter/item/${item.link}`)}
                className="mt-4 cursor-pointer w-15 sm:w-40 hover:drop-shadow-xl"
              >
                <img
                  src={item.img}
                  alt={item.link}
                  className="rounded-full w-20 sm:w-40 hover:p-1"
                />
                <p className="text-center">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <BuyWithBrandName />
      <BestFoodComponent brandsItems={brandsItems} />
    </>
  );
};

export default Homepage;
