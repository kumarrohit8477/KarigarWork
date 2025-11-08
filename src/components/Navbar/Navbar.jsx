import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="logo">KarigarWork</div>

        <div className="search inpt">
          <img src="src/assets/icons/search.svg" alt="Search Icon" className="icn" />
          <input placeholder="Karigar Search" type="text" className="loc" />
        </div>

        <div className="location inpt">
          <img src="src/assets/icons/location.svg" alt="Location Icon" className="icn" />
          <input placeholder="Location" type="text" className="loc" />
        </div>

        <div className="login">
          <Link to="/cart" className="link">
            <img src="src/assets/icons/shopping-cart.svg" alt="Cart Icon" className="icn" />
          </Link>

          <Link to="/login" className="link">
            <img src="src/assets/icons/login.svg" alt="Login Icon" className="icn" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

