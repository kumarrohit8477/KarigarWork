import React from 'react';
import './cServices.css';
import { useCart } from "../../context/CartContext";


const CServices = ({ id, name, rating, reviews, price, duration, image }) => {
  const { addToCart } = useCart();
  return (
    <div className="svces">
      <div className="ite">
        <ul>
          <li className="snme">{name}</li>
          <li>{rating} ({reviews} reviews)</li>
          <li>
            <p>₹{price}(Making cost)</p>
            <p>{duration} (duration)</p>
          </li>
          <li className="dtls">View Details</li>
        </ul>
      </div>
      <div className="item">
        <img src={image} alt={name} />
        <button className='btnn' onClick={() =>
          addToCart({
            id,
            name,
            category: "Carpenter",
            price,
            image,
          })
        }>Add</button>

      </div>
    </div>
  );
};

export default CServices;
