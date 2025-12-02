import React from 'react'
import { Link } from 'react-router-dom';
import CServices from "../CSevices";
import ServiceBox from "../../AllServices/ServiceBox";
import "../Servicetype.css";

const Carpenter = () => {
  const Items = [
    "Bed",
    "Almirah",
    "Kitchen",
    "Doors",
    "Tables",
    "Chairs",
    "Chairs",
    "Chairs",
    "Chairs",
    "Hangers & Drill",
    "Furniture Repair",
    <Link to='/Watertank'>Book a Consultation</Link>
  ];

  return (
    <>
      <ServiceBox serviceName="Carpenter" items={Items} />
      <div className="box2">
        {/*1 BED */}
        <div id="bed-section" className="nm">Bed</div>
        <div className="box3">
          <CServices name="Normal Bed (with side tables)(6X6)" rating="4.5" reviews="5K" price="10000" duration="4 days" image="images/bed1.png"/>
          <CServices name="Normal Bed (with side tables)(6X6)" rating="4.5" reviews="5K" price="10000" duration="4 days" image="images/bed2.png"/>
          <CServices name="Normal Bed (6X6)" rating="4.5" reviews="5K" price="8000" duration="4 days" image="images/bed3.png"/>
          <CServices name="Normal Bed (with side tables)(6X6)" rating="4.5" reviews="5K" price="10000" duration="4 days" image="images/bed4.png"/>
          <CServices name="Customised Bed (6X6)" rating="4.5" reviews="5K" price="8000" duration="4 days" image="images/bed4.png"/>
        </div>
        {/*2 ALMIRAH */} 
        <div id="almirah-section" className="nm">Almirah</div>
        <div className="box3">
          {[...Array(10)].map((_, i) => (
            <CServices
              key={i}
              name="Normal Bed (with side tables)"
              rating="4.5"
              reviews="5K"
              price="10000"
              duration="4 days"
             image="images/bed1.png"
            />
          ))}
        </div>

        {/*3 KITCHEN */}
        <div id="doors-section" className="nm">Doors</div>
        <div className="box3">
          {[...Array(10)].map((_, i) => (
            <CServices
              key={i}
              name="Normal Bed (with side tables)"
              rating="4.5"
              reviews="5K"
              price="10000"
              duration="4 days"
              image="images/bed1.png"
            />
          ))}
        </div>
        {/*4 BED */}
        <div id="kitchen-section" className="nm">Kitchen</div>
        <div className="box3">
          {[...Array(10)].map((_, i) => (
            <CServices
              key={i}
              name="Normal Bed (with side tables)"
              rating="4.5"
              reviews="5K"
              price="10000"
              duration="4 days"
              image="images/bed1.png"
            />
          ))}
        </div>
        {/*5 Table*/}
        <div id="tables-section" className="nm">Tables</div>
        <div className="box3">
          {[...Array(10)].map((_, i) => (
            <CServices
              key={i}
              name="Normal Bed (with side tables)"
              rating="4.5"
              reviews="5K"
              price="10000"
              duration="4 days"
              image="images/bed1.png"
            />
          ))}
        </div>
        {/*6 Chiars */}
        <div id="chairs-section" className="nm">Chairs</div>
        <div className="box3">
          {[...Array(10)].map((_, i) => (
            <CServices
              key={i}
              name="Normal Bed (with side tables)"
              rating="4.5"
              reviews="5K"
              price="10000"
              duration="4 days"
              image="images/bed1.png"
            />
          ))}
        </div>
        {/*4 BED */}
        <div id="kitchen-section" className="nm">Kitchen</div>
        <div className="box3">
          {[...Array(10)].map((_, i) => (
            <CServices
              key={i}
              name="Normal Bed (with side tables)"
              rating="4.5"
              reviews="5K"
              price="10000"
              duration="4 days"
              image="images/bed1.png"
            />
          ))}
        </div>
        {/*4 BED */}
        <div id="kitchen-section" className="nm">Kitchen</div>
        <div className="box3">
          {[...Array(10)].map((_, i) => (
            <CServices
              key={i}
              name="Normal Bed (with side tables)"
              rating="4.5"
              reviews="5K"
              price="10000"
              duration="4 days"
              image="images/bed1.png"
            />
          ))}
        </div>

        {/*4 BED */}
        <div id="kitchen-section" className="nm">Kitchen</div>
        <div className="box3">
          {[...Array(10)].map((_, i) => (
            <CServices
              key={i}
              name="Normal Bed (with side tables)"
              rating="4.5"
              reviews="5K"
              price="10000"
              duration="4 days"
              image="images/bed1.png"
            />
          ))}
        </div>

        {/*10 hangers */}
        <div id="hangers & drill-section" className="nm">Hangers & Drill</div>
        <div className="box3">
          {[...Array(10)].map((_, i) => (
            <CServices
              key={i}
              name="Normal Bed (with side tables)"
              rating="4.5"
              reviews="5K"
              price="10000"
              duration="4 days"
              image="images/bed1.png"
            />
          ))}
        </div>
        {/*11 furiniture repair */}
        <div id="furniture repair-section" className="nm">Furniture Repair</div>
        <div className="box3">
          {[...Array(13)].map((_, i) => (
            <CServices
              key={i}
              name="Normal Bed (with side tables)"
              rating="4.5"
              reviews="5K"
              price="10000"
              duration="4 days"
              image="images/bed1.png"
            />
          ))}
        </div>

        
      </div>
    </>
  );
};

export default Carpenter;