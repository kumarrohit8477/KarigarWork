import React from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
const Cart = () => {
   const navigate = useNavigate();
   const goHome = () => {
      navigate("/");
   };
   return (
      <>
         <button onClick={goHome} className="rethome">X</button>
         <div className="cart-container">
            {/* --- Header --- */}
            <header className="cart-header">

               <h1 className="page-title ttl">My Cart (2 items)</h1>
            </header>

            {/* --- Main Content --- */}
            <div className="cart-content">
               {/* Service Items */}
               <section className="service-items">
                  <div className="cart-item">
                     <div className="item-details">
                        <p className="item-name">Intense Bathroom Cleaning</p>
                        <p className="item-meta">4.8 (8k+ bookings)</p>
                        <div className="item-actions">
                           <button className="btn-remove">Remove</button>
                           <div className="quantity-control">
                              <button className="qty-btn">-</button>
                              <span className="qty-count">1</span>
                              <button className="qty-btn">+</button>
                           </div>
                        </div>
                     </div>
                     <p className="item-price">₹ 999</p>
                  </div>

                  <div className="cart-item">
                     <div className="item-details">
                        <p className="item-name">Haircut for Men</p>
                        <p className="item-meta">4.9 (15k+ bookings)</p>
                        <div className="item-actions">
                           <button className="btn-remove">Remove</button>
                           <div className="quantity-control">
                              <button className="qty-btn">-</button>
                              <span className="qty-count">1</span>
                              <button className="qty-btn">+</button>
                           </div>
                        </div>
                     </div>
                     <p className="item-price">₹ 259</p>
                  </div>
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
                     <span className="total-price">₹ 1097</span>
                  </div>
               </section>
            </div>

            {/* --- Sticky Footer --- */}
            <footer className="sticky-footer">
               <div className="total-display">
                  <p className="total-text">₹ 1097</p>
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
