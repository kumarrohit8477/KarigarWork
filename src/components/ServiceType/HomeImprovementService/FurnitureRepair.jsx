import React from 'react';
import { Link } from 'react-router-dom';
import CServices from "../CSevices";
import ServiceBox from "../../AllServices/ServiceBox";
import "../Servicetype.css";

const FurnitureRepair = () => {
  const Items = [
    "Bed",
    "Almirah",
    "Kitchen",
    "Doors",
    "Tables",
    "Chairs",
    "Hangers & Drill",
    <Link to='/Watertank'>Book a Consultation</Link>
  ];

  return (
    <>
      <ServiceBox serviceName="Carpenter" items={Items} />

      <div className="box2">

        {/* BED SECTION */}
        <div id="bed-section" className="nm">Bed</div>
        <div className="box3">
          <CServices id={101} name="Normal Bed (Side Tables)" rating="4.5" reviews="5K" price={10000} duration="4 days" image="images/bed1.png" />
          <CServices id={102} name="Normal Bed (Side Tables)" rating="4.5" reviews="5K" price={10000} duration="4 days" image="images/bed2.png" />
          <CServices id={103} name="Normal Bed (6X6)" rating="4.5" reviews="5K" price={8000} duration="4 days" image="images/bed3.png" />
          <CServices id={104} name="Normal Bed Premium" rating="4.5" reviews="5K" price={12000} duration="4 days" image="images/bed4.png" />
          <CServices id={105} name="Customised Bed" rating="4.5" reviews="5K" price={8000} duration="4 days" image="images/bed4.png" />
        </div>

        {/* ALMIRAH */}
        <div id="almirah-section" className="nm">Almirah</div>
        <div className="box3">
          {[...Array(10)].map((_, i) => (
            <CServices
              key={200 + i}
              id={200 + i}
              name="Wooden Almirah"
              rating="4.5"
              reviews="5K"
              price={10000}
              duration="4 days"
              image="images/bed1.png"
            />
          ))}
        </div>

        {/* DOORS */}
        <div id="doors-section" className="nm">Doors</div>
        <div className="box3">
          {[...Array(10)].map((_, i) => (
            <CServices
              key={300 + i}
              id={300 + i}
              name="Door Repair"
              rating="4.5"
              reviews="5K"
              price={1500}
              duration="1 hour"
              image="images/bed1.png"
            />
          ))}
        </div>

        {/* KITCHEN */}
        <div id="kitchen-section" className="nm">Kitchen</div>
        <div className="box3">
          {[...Array(10)].map((_, i) => (
            <CServices
              key={400 + i}
              id={400 + i}
              name="Modular Kitchen Work"
              rating="4.5"
              reviews="5K"
              price={20000}
              duration="5 days"
              image="images/bed1.png"
            />
          ))}
        </div>

        {/* TABLES */}
        <div id="tables-section" className="nm">Tables</div>
        <div className="box3">
          {[...Array(10)].map((_, i) => (
            <CServices
              key={500 + i}
              id={500 + i}
              name="Table Fixing"
              rating="4.5"
              reviews="5K"
              price={500}
              duration="1 hour"
              image="images/bed1.png"
            />
          ))}
        </div>

        {/* CHAIRS */}
        <div id="chairs-section" className="nm">Chairs</div>
        <div className="box3">
          {[...Array(10)].map((_, i) => (
            <CServices
              key={600 + i}
              id={600 + i}
              name="Chair Repair"
              rating="4.5"
              reviews="5K"
              price={400}
              duration="1 hour"
              image="images/bed1.png"
            />
          ))}
        </div>

      </div>
    </>
  );
};

export default FurnitureRepair;