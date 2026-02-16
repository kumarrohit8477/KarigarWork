import React from "react";
import "./FirstContainer.css";
import { Link } from "react-router-dom";
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
               <Link to='Carpenter'><Midboxicon image="icons/carpenter.png" name="Carpenter"/></Link>
               <Link to='Electrician'><Midboxicon image="icons/electrician.png" name="Electrician"/></Link>
               <Link to='Plumber'><Midboxicon image="icons/plumber.png" name="Plumber"/></Link>
               <Link to='ServiceTypeSelector'><Midboxicon image="icons/cleaning.png" name="Cleaning"/></Link>
               <Link to='Acservice'><Midboxicon image="icons/ac.png" name="AC Service"/></Link>
               <Link to='consultation'><Midboxicon image="icons/ro.png" name="Book a Consultation"/></Link>
               

            </div>

            <div className="botbox">
               <div className="sbotbox">
                  <img src="icons/rating.svg" className="sbotimg" />
                  <div className="sbottext">
                     <div id="rating">4.8</div>
                     <div id="serviceRating">Service rating*</div>
                  </div>
               </div>

               <div className="sbotbox">
                  <img src="icons/users.svg" className="sbotimg" />
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
