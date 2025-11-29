import React, { useState } from 'react';
import "./Cartin.css";

const Cartin = () => {
   const [qty, setQty] = useState(1);

   const handleIncrement = () => {
      setQty(qty + 1);
   };

   const handleDecrement = () => {
      if (qty > 1) {
         setQty(qty - 1);
      }
   };

   const handleRemove = () => {
      setQty(0);
   };

   return (
      <>
         {qty > 0 && (
            <div className="cart-item">
               <div className="item-details">
                  <p className="item-name">Intense Bathroom Cleaning</p>
                  <p className="item-meta">4.8 (8k+ bookings)</p>
                  <div className="item-actions">
                     <button className="btn-remove" onClick={handleRemove}>
                        Remove
                     </button>

                     <div className="quantity-control">
                        <button className="qty-btn" onClick={handleDecrement}>-</button>
                        <span className="qty-count">{qty}</span>
                        <button className="qty-btn" onClick={handleIncrement}>+</button>
                     </div>

                  </div>
               </div>
               <p className="item-price">₹ {999 * qty}</p>
            </div>
         )}
      </>
   );
};

export default Cartin;
