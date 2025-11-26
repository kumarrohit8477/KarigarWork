import React from 'react';
import CServices from "../../CSevices";
import ServiceBox from "../../../AllServices/ServiceBox";
import "../../Servicetype.css";

const Plumrep = () => {
  const Items = [
    "Tap Fitting",
    "Almirah",
    "Kitchen",
    "Doors",
    "Tables",
    "Chairs",
    "Windows",
    "Shelves",
    "Cabinets",
  ];
  return (
    <>
      <ServiceBox serviceName="Plumber" items={Items}/>
      <div className="box2">
        <div id="tap fitting-section" className="nm">Tap Fitting</div>
        <div className='box3'>
          {[...Array(10)].map((_, i) => (
             <CServices 
                key={i}
                name="Normal Bed (with side tables)" 
                rating="4.5" 
                reviews="5K" 
                price="10000 " 
                duration="4 days" 
                image="/src/assets/images/bed1.png" 
             />
          ))}
        </div>
      </div>
    </>
  )
}

export default Plumrep;