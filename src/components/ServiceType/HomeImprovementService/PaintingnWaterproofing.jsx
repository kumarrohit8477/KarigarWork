import React from 'react'
import CServices from "../CSevices";
import ServiceBox from "../../AllServices/ServiceBox";
import "../Servicetype.css";

const PaintingnWaterproofing = () => {
   const Items = [
      "Bed",
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
         <ServiceBox serviceName="Painting & Water Proofing" items={Items} />

         <div className="box2">
            {/* BED */}
            <div id="bed-section" className="nm">Bed</div>
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

            {/* KITCHEN */}
            <div id="kitchen-section" className="nm">Kitchen</div>
            <div className="box3">
               {[...Array(10)].map((_, i) => (
                  <CServices
                     key={i}
                     name="Modular Kitchen Setup"
                     rating="4.7"
                     reviews="2K"
                     price="15000"
                     duration="5 days"
                    image="images/bed1.png"
                  />
               ))}
            </div>

            {/* Add more sections similarly */}
         </div>
      </>
   );
}

export default PaintingnWaterproofing