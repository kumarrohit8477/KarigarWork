import React from "react";
import "./FirstContainer.css";

const FirstContainer = () => {
   return (
      <div className="hero">
         <div className="overlay"></div>

         {/* LEFT CONTENT */}
         <div className="content">
            <h1 className="titlle">KarigarWork</h1>
            <p className="tagline">Your Home Service Partner</p>

            <div className="cta-btn">
               Manufacture | Repair | Service
            </div>
         </div>

         {/* RIGHT CONTENT BOX */}
         <div className="rContainer">

            <div className="midbox">
               <p id="midboxpara">What are you looking for?</p>

               <div className="midboxicons">
                  <img src="/assets/images/caricon.png" className="mbii" />
                  Carpenter
               </div>

               <div className="midboxicons">
                  <img src="/assets/images/elecicon.png" className="mbii" />
                  Electrician
               </div>

               <div className="midboxicons">
                  <img src="/assets/images/plumicon.png" className="mbii" />
                  Plumber
               </div>

               <div className="midboxicons">
                  <img src="/assets/images/cleaningicon.png" className="mbii" />
                  Cleaning
               </div>

               <div className="midboxicons">
                  <img src="/assets/images/acicon.png" className="mbii" />
                  AC Service
               </div>

               <div className="midboxicons">
                  <img src="/assets/images/roicon.png" className="mbii" />
                  RO Service
               </div>
            </div>

            <div className="botbox">
               <div className="sbotbox">
                  <img src="/assets/icons/rating.svg" className="sbotimg" />
                  <div className="sbottext">
                     <div id="rating">4.8</div>
                     <div id="serviceRating">Service rating*</div>
                  </div>
               </div>

               <div className="sbotbox">
                  <img src="/assets/icons/users.svg" className="sbotimg" />
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
