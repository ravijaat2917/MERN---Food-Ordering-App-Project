import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge } from "antd";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div
      className="py-4 px-10 md:flex-row flex-col bg-purple-300 "
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="logo md:py-0 pb-7 text-4xl font-bold text-red-600 ">
        Zomato Lite
      </span>
      <div>
        <Link className="navLink mr-5 " to="/">
          Home
        </Link>
        <Link className="navLink mr-5 ml-5" to="/cart">
          <Badge
            count={items.length}
            className="font-semi-bold"
            offset={[15, -1]}
            size="12px"
          >
            Cart
          </Badge>
        </Link>
        <Link className="navLink mr-5 ml-5 " to="/orders">
          Orders
        </Link>
        {/* <span className="cartCount mx-5">Cart items: {items.length}</span> */}
      </div>
    </div>
  );
};

export default Navbar;
