import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Navbar = () => {

  const { cartCount } = useCart();   // <-- CART COUNTER
  const [name, setname] = React.useState("Karigar Search");

  const handleChange = (e) => {
    setname(e.target.value);
  };

  return (
    <>
      <div className="nav">
        <div className="logo">KarigarWork</div>

        <div className="search inpt">
          <img src="icons/search.svg" alt="Search Icon" className="icn" />
          <input type="text" value={name} onChange={handleChange} className="loc" />
        </div>

        <div className="location inpt">
          <img src="icons/location.svg" alt="Location Icon" className="icn" />
          <input placeholder="Location" type="text" className="loc" />
        </div>

        <div className="login">

          {/* CART ICON + COUNTER */}
          <div className="cart-wrapper">
            <Link to="/cart" className="link">
              <img src="icons/shopping-cart.svg" alt="Cart Icon" className="icn" />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </Link>
          </div>

          <Link to="/login" className="link">
            <img src="icons/login.svg" alt="Login Icon" className="icn" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
