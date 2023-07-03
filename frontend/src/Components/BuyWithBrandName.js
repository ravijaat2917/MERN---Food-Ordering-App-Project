import React from "react";
import { brands } from "./../data/brandsLists";
import { useNavigate } from "react-router-dom";

const BuyWithBrandName = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="md:mx-20">
        <p className="sm:text-4xl  text-center sm:text-left  text-xl font-normal font-serif pt-5 tracking-wider">
          Top brands for you
        </p>
        <div className="flex px-4  sm:pt-4 max-h-72 overflow-hidden sm:max-h-full flex-wrap flex-row justify-between ">
          {brands.map((item) => {
            return (
              <div
                onClick={() => navigate(`filter/restaurant/${item.link}`)}
                className="mt-4 hover:translate-y--3 cursor-pointer pb-2 w-20 sm:w-30 mx-1 hover:drop-shadow-2xl drop-shadow-xl"
              >
                <img
                  src={item.img}
                  alt={item.link}
                  className="rounded-full   w-full hover:p-1"
                  style={{}}
                />
                <p className="text-center">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BuyWithBrandName;
