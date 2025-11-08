import React, { useRef } from "react";
import "./Carousel.css"; // assuming your CSS is saved here
const Carousel = () => {
   const carouselRef = useRef(null);

   const scroll = (direction) => {
      const carousel = carouselRef.current;
      const cardWidth = carousel.querySelector(".card").offsetWidth + 16; // + gap
      carousel.scrollBy({
         left: direction === "left" ? -cardWidth : cardWidth,
         behavior: "smooth",
      });
   };

   return (
      <div className="secondContainer">
         <i
            id="left"
            className="fa-solid fa-chevron-left arrows"
            onClick={() => scroll("left")}
         ></i>

         <ul className="carousel" ref={carouselRef}>
            <li className="card">
               <img src="src/assets/images/ryf.png" alt="ryf" draggable="false" className="img" />
            </li>
            <li className="card">
               <img src="src/assets/images/sybd.png" alt="sybd" draggable="false" className="img" />
            </li>
            <li className="card">
               <img src="src/assets/images/acs.png" alt="acs" draggable="false" className="img" />
            </li>
            <li className="card">
               <img src="src/assets/images/roi.png" alt="roi" draggable="false" className="img" />
            </li>
            <li className="card">
               <img src="src/assets/images/ikc.png" alt="ikc" draggable="false" className="img" />
            </li>
            <li className="card">
               <img src="src/assets/images/ryf.png" alt="ryf" draggable="false" className="img" />
            </li>
         </ul>

         <i
            id="right"
            className="fa-solid fa-chevron-right arrows"
            onClick={() => scroll("right")}
         ></i>
      </div>
   );
};

export default Carousel;
