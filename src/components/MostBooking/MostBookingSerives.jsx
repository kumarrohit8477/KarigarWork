// MostBookingServices.jsx
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import MostBookingServicesItem from "./MostBookingServicesItem";
import "./MostBookingServices.css";

const MostBookingServices = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (direction) => {
    const scrollAmount = scrollRef.current.firstChild.offsetWidth + 16;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const startDragging = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const stopDragging = () => setIsDragging(false);

  const onDragging = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="mainbox">
      <div className="title">Most Booked Services</div>

      <div className="thirdContainerMain">
        <i className="fa-solid fa-chevron-left arrows2" onClick={() => handleScroll("left")} />

        <div
          className={`thirdContainerMainInner ${isDragging ? "dragging" : ""}`}
          ref={scrollRef}
          onMouseDown={startDragging}
          onMouseLeave={stopDragging}
          onMouseUp={stopDragging}
          onMouseMove={onDragging}
        >

          {/* -------------- ITEMS WRITTEN SEPARATELY -------------- */}
          <Link to='/Carpenter'><MostBookingServicesItem image="images/carpenter.png" serviceName="Carpenter" rating="4.0" price="400"/></Link>
          <Link to="/Ro"><MostBookingServicesItem image="images/ro.png" serviceName="RO Service" rating="4.0" price="400"/></Link>
          <Link to="/Acservice"><MostBookingServicesItem image="images/ac.png" serviceName="AC Service" rating="4.0" price="400"/></Link>
          <Link to="/Ro"><MostBookingServicesItem image="images/kitchen.png" serviceName="Modular Kitchen" rating="4.0" price="400"/></Link>
          <Link to="/Ro"><MostBookingServicesItem image="images/bed.png" serviceName="King Size Bed" rating="4.0" price="10000"/></Link>
          <Link to="/Ro"><MostBookingServicesItem image="images/bed.png" serviceName="King Size Bed" rating="4.0" price="10000"/></Link>
          <Link to="/Ro"><MostBookingServicesItem image="images/bed.png" serviceName="King Size Bed" rating="4.0" price="10000"/></Link>
          
          
          

          {/* Add more manually if needed */}

        </div>

        <i className="fa-solid fa-chevron-right arrows2" onClick={() => handleScroll("right")} />
      </div>
    </div>
  );
};

export default MostBookingServices;
