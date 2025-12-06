import React, { useMemo } from "react";
import "./Cart.css";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from 'react-router-dom';
const Cart = () => {
   const { cartItems, updateQuantity, removeItem } = useCart();

   // ---------- Calculations ----------
   const { subtotal, taxes, convenienceFee, totalAmount } = useMemo(() => {
      const sub = cartItems.reduce(
         (acc, item) => acc + item.price * item.quantity,
         0
      );
      const tax = Math.round(sub * 0.18);
      const fee = 49;
      return {
         subtotal: sub,
         taxes: tax,
         convenienceFee: fee,
         totalAmount: sub + tax + fee,
      };
   }, [cartItems]);

   // ---------- Empty Cart ----------
   if (cartItems.length === 0) {
      return (
         <div className="empty-cart">
            <h2>Your Cart is Empty 😔</h2>
            <p>Add services to continue</p>
            <button className="browse-btn"><Link to="/">Browse Services</Link></button>
         </div>
      );
   }
   return (
      <div className="cart-container">
         <h1 className="page-title">My Cart</h1>

         <div className="cart-layout">
            {/* ---------- Cart Items Section ---------- */}
            <div className="cart-items-section">
               {cartItems.map((item) => (
                  <CartItem
                     key={item.id}
                     item={item}
                     updateQuantity={updateQuantity}
                     removeItem={removeItem}
                  />
               ))}

               {/* ---------- Date/Time Slot Selector ---------- */}
               <div className="slot-selector">
                  <span className="slot-icon">📅</span>
                  <div className="slot-text">
                     <h4>Select Date & Time</h4>
                     <p>Choose your preferred time slot</p>
                  </div>
                  <button className="arrow-btn">{">"}</button>
               </div>
            </div>

            {/* ---------- Billing Section ---------- */}
            <div className="bill-section">
               <div className="bill-card">
                  <h2>Payment Summary</h2>

                  <div className="bill-row">
                     <span>Item Total</span>
                     <span>₹{subtotal}</span>
                  </div>

                  <div className="bill-row">
                     <span>Taxes & GST (18%)</span>
                     <span>₹{taxes}</span>
                  </div>

                  <div className="bill-row">
                     <span>Convenience Fee</span>
                     <span>₹{convenienceFee}</span>
                  </div>

                  <hr />

                  <div className="bill-row total">
                     <span>Total Amount</span>
                     <span>₹{totalAmount}</span>
                  </div>

                  <button className="checkout-btn">Proceed to Checkout</button>
                  <p className="secure-text">🔒 Secure & Encrypted Payment</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Cart;
