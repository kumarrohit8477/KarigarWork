import React from "react";
import "./MidboxIcon.css";

const MidboxIcon = ({ image, label }) => {
  return (
    <div className="midboxicons">
      <img src={image} alt={label} className="mbii" />
      {label}
    </div>
  );
};

export default MidboxIcon;
