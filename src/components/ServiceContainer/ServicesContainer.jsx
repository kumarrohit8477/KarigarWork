import React from 'react';
import { Link } from "react-router-dom";
import ServiceName from './ServiceName';
import './ServicesContainer.css';

const ServicesContainer = () => {
  return (
    <>
      {/* Home Improvement Services */}
      <div className="conFirst">
        <div className="srvcs">Home improvement services</div>
        <div className="servicesGrid">

          <Link to="/Carpenter"><ServiceName name="Carpenter" image="src/assets/images/carpenter.png" /></Link>
          <Link to="/Plumber"><ServiceName name="Plumber" image="src/assets/images/plumber.png" /></Link>
          <Link to="/Electrician"><ServiceName name="Electrician" image="src/assets/images/electrician.png" /></Link>
          <Link to="/PaintingnWaterproofing"><ServiceName name="Painting & Waterproofing" image="src/assets/images/painter.png" /></Link>
          <Link to="/Mason"><ServiceName name="Mason" image="src/assets/images/mason.png" /></Link>
          <Link to="/FlooringNTiling"><ServiceName name="Flooring & Tiling" image="src/assets/images/tilesetter.png" /></Link>
          <Link to="/Aluminiumwork"><ServiceName name="Aluminium work" image="src/assets/images/cabinate.png" /></Link>
          <Link to="/SteelNWelding"><ServiceName name="Steel & Welding work" image="src/assets/images/welding.png" /></Link>

        </div>
      </div>

      {/* Appliance Repair Services */}
      <div className="conFirst">
        <div className="srvcs">Appliance repair & Services</div>
        <div className="servicesGrid">

          <Link to="/ACService"><ServiceName name="Ac service & repair" image="src/assets/images/ac.png" /></Link>
          <Link to="/WashingMachine"><ServiceName name="Washing machine repair" image="src/assets/images/wm.png" /></Link>
          <Link to="/Refrigerator"><ServiceName name="Refrigerator repair" image="src/assets/images/refrigerator.png" /></Link>
          <Link to="/Microwave"><ServiceName name="Microwave repair" image="src/assets/images/microwave.png" /></Link>

        </div>
      </div>

      {/* Cleaning & Pest Control */}
      <div className="conFirst">
        <div className="srvcs">Cleaning & Pest control</div>
        <div className="servicesGrid">

          <Link to="/Bathroom&kitchen"><ServiceName name="Bathroom & Kitchen Cleaning" image="src/assets/images/bathroom.png" /></Link>
          <Link to="/SofaNcarpet"><ServiceName name="Sofa & Carpet Cleaning" image="src/assets/images/sofa.png" /></Link>
          <Link to="/Watertank"><ServiceName name="Water tank Cleaning" image="src/assets/images/wtc.jpg" /></Link>
          <Link to="/PestControl"><ServiceName name="Pest control" image="src/assets/images/pc.jpg" /></Link>

        </div>
      </div>
    </>
  );
};

export default ServicesContainer;
