import React from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import counterContext from "../context/context";
import Cartin from "./Cartin";
const Cart = () => {
   const navigate = useNavigate();
   const goHome = () => {
      navigate("/");
   };
   const count = React.useContext(counterContext);
   const total = 1097;
   return (
      <>
         <button onClick={goHome} className="rethome">X</button>
         <div className="cart-container">
            {/* --- Header --- */}
            <header className="cart-header">
               <h1 className="page-title ttl">My Cart ({count} items)</h1>
            </header>

            {/* --- Main Content --- */}
            <div className="cart-content">
               {/* Service Items */}
               <section className="service-items">
                  <Cartin />
                  <Cartin />
                  <Cartin />
               </section>

               <hr className="section-divider" />

               {/* Schedule and Location */}
               <section className="schedule-section">
                  <div className="location">
                     <p className="section-title">Service Address</p>
                     <p className="info-text">123, Service Lane, New Delhi - 110001</p>
                     <button className="btn-change">Change</button>
                  </div>
                  <div className="date-time">
                     <p className="section-title">Schedule</p>
                     <p className="info-text">Wed, 29th Oct | 10:00 AM - 11:00 AM</p>
                     <button className="btn-change">Change</button>
                  </div>
               </section>

               <hr className="section-divider" />

               {/* Coupon Section */}
               <section className="coupon-section">
                  <p className="section-title">Apply Coupon</p>
                  <div className="coupon-input">
                     <input
                        type="text"
                        placeholder="Enter Coupon Code"
                        className="coupon-field"
                     />
                     <button className="btn-apply">APPLY</button>
                  </div>
               </section>

               {/* Price Summary */}
               <section className="price-summary">
                  <p className="section-title">Bill Details</p>
                  <div className="bill-row">
                     <span>Item Total</span>
                     <span>₹ 1258</span>
                  </div>
                  <div className="bill-row">
                     <span>Discount (FLAT20)</span>
                     <span className="discount-color">- ₹ 251</span>
                  </div>
                  <div className="bill-row">
                     <span>Taxes & Fees</span>
                     <span>+ ₹ 90</span>
                  </div>
                  <div className="bill-row total-row">
                     <span>Grand Total</span>
                     <span className="total-price">₹ {total}</span>
                  </div>
               </section>
            </div>

            {/* --- Sticky Footer --- */}
            <footer className="sticky-footer">
               <div className="total-display">
                  <p className="total-text">₹ {total}</p>
                  <p className="view-details">View Details</p>
               </div>
               <button className="btn primary-btn checkout-btn">
                  Proceed to Checkout
               </button>
            </footer>
         </div>
      </>

   );
};

export default Cart;
