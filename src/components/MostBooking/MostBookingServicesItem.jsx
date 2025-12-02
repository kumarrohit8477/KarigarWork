import React from 'react';

import './MostBookingServicesItem.css';

const MostBookingServicesItem = ({ image, serviceName, rating, price }) => {
  return (
    <div className="contmain">
      <div className="fir">
        <img src={image} alt={serviceName} className="service-img" />
      </div>
      <div className="serviceDet">
        <ul>
          <li className="srvces">{serviceName}</li>
          <li className="serviceRating">⭐{rating}</li>
          <li className="servicePrice">₹{price}</li>
        </ul>
      </div>
    </div>
  );
};

export default MostBookingServicesItem;
