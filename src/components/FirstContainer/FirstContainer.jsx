import React from "react";
import "./FirstContainer.css";
import Midboxicon from "./midboxicon";

const FirstContainer = () => {
   return (
      <div className="hero">

         {/* DARK OVERLAY */}
         <div className="overlay"></div>

         {/* LEFT CONTENT */}
         <div className="content">
            <h1 className="tittle">KarigarWork</h1>
            <p className="tagline">Your Home Service Partner</p>

            <div className="cta-btn">
               Manufacture | Repair | Service
            </div>
         </div>

         {/* RIGHT BOX */}
         <div className="rContainer">
            <div className="midbox">
               <p id="midboxpara">What are you looking for?</p>

               <Midboxicon image="src/assets/icons/caricon.png" name="Carpenter"/>
               <Midboxicon image="src/assets/icons/elecicon.png" name="Electrician"/>
               <Midboxicon image="src/assets/icons/plumicon.png" name="Plumber"/>
               <Midboxicon image="src/assets/icons/cleaningicon.png" name="Cleaning"/>
               <Midboxicon image="src/assets/icons/acicon.png" name="AC Service"/>
               <Midboxicon image="src/assets/icons/roicon.png" name="Book a Consultation"/>

            </div>

            <div className="botbox">
               <div className="sbotbox">
                  <img src="src/assets/icons/rating.svg" className="sbotimg" />
                  <div className="sbottext">
                     <div id="rating">4.8</div>
                     <div id="serviceRating">Service rating*</div>
                  </div>
               </div>

               <div className="sbotbox">
                  <img src="src/assets/icons/users.svg" className="sbotimg" />
                  <div className="sbottext">
                     <div id="globaluser">12M+</div>
                     <div id="customerGlobaly">Customers Globally*</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default FirstContainer;
