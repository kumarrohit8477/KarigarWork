import React from 'react'
import "./ServiceBox.css";

const ServiceBox = ({ serviceName, items }) => {
  return (
    <div className="lbox">
      <div className="sName">{serviceName}</div>
      <div className="libox">
        {items.map((item, index) => (
          <div key={index} className="boxes">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
export default ServiceBox;