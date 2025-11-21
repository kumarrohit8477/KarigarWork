import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import ServiceName from './ServiceName';
import './ServicesContainer.css';
const ServicesContainer = () => {
  return (
    <>
      <div className="conFirst">
        <div className="srvcs">Home improvement services</div>
        <div className="servicesGrid">


          <Link to="/Carpenter">
            <ServiceName name="Carpenter" image="src/assets/images/carpenter.png" />
          </Link>


          <Link to="/Plumber">
          <ServiceName name="Plumber" image="src/assets/images/plumber.png" />
          </Link>


          <Link to="/Electrician">
          <ServiceName name="Electrician" image="src/assets/images/electrician.png" />
          </Link>

          <Link to="/PaintingnWaterproofing">
          <ServiceName name="Painting & Waterproofing" image="src/assets/images/painter.png" />
          </Link>

          <Link to="/Mason">
              <ServiceName name="Mason" image="src/assets/images/mason.png" />
          </Link>
      
          <Link to="/FlooringNTiling">
           <ServiceName name="Flooring & Tiling" image="src/assets/images/tilesetter.png" />
          </Link>
         

         <Link to="/Aluminiumwork">
         <ServiceName name="Aluminium work" image="src/assets/images/cabinate.png" />
         </Link>
          

          <Link to="/SteelNWelding">
          <ServiceName name="Steel & Welding work" image="src/assets/images/welding.png" />
          </Link>
          
        </div>
      </div>
      <div className="conFirst">
        <div className="srvcs">Appliance repair & Services</div>
        <div className="servicesGrid">
          <ServiceName name="Ac service & repair" image="src/assets/images/ac.png" />
          <ServiceName name="Washing machine repair" image="src/assets/images/wm.png" />
          <ServiceName name="Refrigerator repair" image="src/assets/images/refrigerator.png" />
          <ServiceName name="Microwave repair" image="src/assets/images/microwave.png" />
        </div>
      </div>

      <div className="conFirst">
        <div className="srvcs">Cleaning & Pest control</div>
        <div className="servicesGrid">
          <ServiceName name="Bathroom & Kitchen Cleaninng" image="src/assets/images/bathroom.png" />
          <ServiceName name="Sofa & Carpet Cleaning" image="src/assets/images/sofa.png" />
          <ServiceName name="Water tankCleaning" image="src/assets/images/wtc.jpg" />
          <ServiceName name="Pest control" image="src/assets/images/pc.jpg" />

        </div>
      </div>
    </>
  );
};

export default ServicesContainer;
