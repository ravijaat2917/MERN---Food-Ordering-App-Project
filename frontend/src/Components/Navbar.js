import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge } from "antd";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div
      className="py-4 px-10  w-full md:flex-row flex-col bg-purple-200 "
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className=" logo md:py-0 pb-7 text-4xl font-bold text-red-600 ">
        Let's Order Something Tasty
      </span>
      <div>
        <Link
          className="navLink  border-2 border-black p-2 rounded-md text-xl font-semibold hover:text-white hover:bg-black mr-5 "
          to="/"
        >
          Home
        </Link>
        <Link
          className="navLink border-2 border-black p-2 rounded-md text-xl font-semibold hover:text-white hover:bg-black mr-5 "
          to="/cart"
        >
          <Badge
            count={items.length}
            className="text-xl hover:text-white"
            offset={[10, -8]}
            size="12px"
          >
            Cart
          </Badge>
        </Link>
        <Link
          className="navLink border-2 border-black p-2 rounded-md text-xl font-semibold hover:text-white hover:bg-black mr-5 "
          to="/orders"
        >
          Orders
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
