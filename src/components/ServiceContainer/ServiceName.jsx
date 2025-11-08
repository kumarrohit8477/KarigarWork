import React from 'react';
import './ServiceName.css';

const ServiceName = ({ name, image }) => {
  return (
    <div className="Containerbox">
      <div className="sName">{name}</div>
      <img className="imgSize" src={image} alt={name} />
    </div>
  );
};

export default ServiceName;
