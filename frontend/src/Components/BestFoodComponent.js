import React from "react";
import { brandsItems } from "../data/brandsLists";

const BestFoodComponent = () => {
  return (
    <>
      <div className="md:mx-20">
        <p className="sm:text-4xl  text-center sm:text-left  text-xl font-normal font-serif pt-5 tracking-wider">
          Best Food Nearby You
        </p>
        <div className="flex flex-row flex-wrap">
          {brandsItems.map((item) => {
            return (
              <div
                style={{ borderRadius: "10px" }}
                className="m-5 card w-fit drop-shadow-xl"
              >
                <div className=" ">
                  <img
                    style={{
                      width: "350px",
                      height: "200px",
                      borderRadius: "10px",
                    }}
                    src={item.img}
                    alt={item.link}
                  />
                </div>
                <div>
                  <p className="flex justify-between px-3 py-3">
                    <span className=" text-xl tracking-widest ">
                      {item.name}
                    </span>
                    <span className="block bg-green-500 px-2 text-white rounded-lg ">
                      {item.rating} &#9733;
                    </span>
                  </p>
                </div>
                <div>
                  <p className="flex justify-between px-3 py-1">
                    <span
                      className="tracking-tighter"
                      style={{
                        display: "block",
                        maxWidth: "220px",
                        maxHeight: "25px",
                        // textOverflow: "ellipsis",
                        lineHeight: "25px",
                          overflow: "hidden",
                        color:'gray'
                      }}
                    >
                      {item.tags +"..."}
                            </span>
                            <span style={{color:"grey" , fontSize:'14px' , paddingTop:'2px'}}>
                                {item.price}
                            </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BestFoodComponent;
