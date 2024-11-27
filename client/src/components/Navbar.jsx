/* eslint-disable no-unused-vars */
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-3">
      <Link to={"/"} className="text-3xl font-bold font-mono">
        نظام الكويز
      </Link>
      <div className="flex gap-5">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive === true ? "text-green-600" : "text-white"
          }
        >
          الرئيسية
        </NavLink>
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) =>
            isActive === true ? "text-green-600" : "text-white"
          }
        >
          لوحة التحكم
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
