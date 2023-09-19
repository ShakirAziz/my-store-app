import React from "react";
import "./styles.css";
import { MdDarkMode } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const MenuNavbar = () => {
  return (
    <div className="menuNavbar">
      <div className="menuNavbar__logo">C</div>
      <div className="menuNavbar__items">
        <ul className="menuNavbar__links">
          <li className="menuNavbar__link">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "Links")}
            >
              Home
            </NavLink>
          </li>
          <li className="menuNavbar__link">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "Links")}
            >
              About
            </NavLink>
          </li>
          <li className="menuNavbar__link">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "Links")}
            >
              Products
            </NavLink>
          </li>

          <li className="menuNavbar__link">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "Links")}
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="menuNavbar__icons">
        <div className="menuNavbar__theme-icon">
          <MdDarkMode className="menuNavbar__icon1" />
        </div>
        <div className="menuNavbar__cart-icon">
          <AiOutlineShoppingCart className="menuNavbar__icon2" />
        </div>
      </div>
    </div>
  );
};

export default MenuNavbar;
