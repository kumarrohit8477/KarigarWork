import React from "react";
import "./StatBox.css";

const StatBox = ({ icon, value, text }) => {
  return (
    <div className="sbotbox">
      <div className="sbotimg">
        <img src={icon} alt={text} className="sbotimg" />
      </div>
      <div className="sbottext">
        <div id="rating">{value}</div>
        <div id="serviceRating">{text}</div>
      </div>
    </div>
  );
};

export default StatBox;
