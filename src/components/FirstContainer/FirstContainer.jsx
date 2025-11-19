import React from 'react'
import "./FirstContainer.css";

const FirstContainer = () => {
   return (
      <>
         <div className="firstContainer">
            <div className="lfirstContainer">
               <div className="upbox">Home services at your doorstep</div>
               <div className="midbox">
                  <p id="midboxpara">What are you looking for?</p>
                  <div className="midboxicons">
                     <img src="src/assets/images/caricon.png" alt="" className="mbii" />
                     Carpenter
                  </div>
                  <div className="midboxicons">
                     <img src="images/elecicon.png" alt="" className="mbii" />
                     Electrician
                  </div>
                  <div className="midboxicons">
                     <img src="images/plumicon.png" alt="" className="mbii" />
                     Plumber
                  </div>
                  <div className="midboxicons">
                     <img src="images/cleaningicon.png" alt="" className="mbii" />
                     Cleaning
                  </div>
                  <div className="midboxicons">
                     <img src="images/acicon.png" alt="" className="mbii" />
                     AC Service
                  </div>
                  <div className="midboxicons">
                     <img src="images/roicon.png" alt="" className="mbii" />
                     RO Service
                  </div>
               </div>
               <div className="botbox">
                  <div className="sbotbox">
                     <div className="sbotimg">
                        <img src="src/assets/icons/rating.svg" alt="image" className="sbotimg" />
                     </div>
                     <div className="sbottext">
                        <div id="rating">4.8</div>
                        <div id="serviceRating">Servicve rating*</div>
                     </div>
                  </div>

                  <div className="sbotbox">
                     <div className="sbotimg">
                        <img src="src/assets/icons/users.svg" alt="image" className="sbotimg" />
                     </div>
                     <div className="sbottext">
                        <div id="globaluser">12M+</div>
                        <div id="customerGlobaly">Customers Globaly*</div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="rfirstContainer">
               <img id="slider" name="slideshow" width="80%" alt="image" />
            </div>
         </div>
      </>
   )
}

export default FirstContainer