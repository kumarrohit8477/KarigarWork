import React from "react";
import "./Button.css"; // optional - for styling

const Button = ({ text, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      className={`custom-button ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
