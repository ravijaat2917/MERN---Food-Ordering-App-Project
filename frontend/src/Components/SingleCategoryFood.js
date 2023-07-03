import React from "react";
import { useNavigate } from "react-router-dom";

const SingleCategoryFood = ({ brandsItems, heading, category }) => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={()=> window.history.back() } className=" mx-3 rounded-md text-white sm:ml-14 mt-2 sm:mt-20 px-3 py-2 bg-slate-500" >Back</button>
      <div className="md:mx-20">
        
        <p className="sm:text-4xl  text-center sm:text-left  text-xl font-normal font-serif pt-1 tracking-wider">
          {heading}
        </p>
        <div className="flex flex-row flex-wrap justify-center">
          {brandsItems.map((item) => {
            let tags = item.tags.toLowerCase();
            // console.log(tags);
            if (tags.includes(category)) {
              return (
                <div
                  onClick={() => navigate(`filter/restaurant/${item.link}`)}
                  style={{ borderRadius: "10px" }}
                  className=" m-4 sm:m-5 card w-fit drop-shadow-2xl sm:drop-shadow-xl hover:drop-shadow-2xl cursor-pointer"
                >
                  <div>
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
                          color: "gray",
                        }}
                      >
                        {item.tags + "..."}
                      </span>
                      <span
                        style={{
                          color: "grey",
                          fontSize: "14px",
                          paddingTop: "2px",
                        }}
                      >
                        {item.price}
                      </span>
                    </p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default SingleCategoryFood;
