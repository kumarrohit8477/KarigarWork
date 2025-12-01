import React from 'react';
import { useRef, useState } from 'react';
import MostBookingServicesItem from './MostBookingServicesItem';
import './MostBookingServices.css'; // optional if you plan to style layout


const services = [
  { image: 'images/carpenter.png', serviceName: 'Carpenter', rating: '4.0', price: '400' },
  { image: 'images/ro.png', serviceName: 'RO Service', rating: '4.0', price: '400' },
  { image: 'images/ac.png', serviceName: 'AC Service', rating: '4.0', price: '400' },
  { image: 'images/kitchen.png', serviceName: 'Modular Kitchen', rating: '4.0', price: '400' },
  { image: 'images/bed.png', serviceName: 'King Size Bed', rating: '4.0', price: '10000' },
  { image: 'images/bed.png', serviceName: 'Carpenter', rating: '4.0', price: '400' },
  { image: 'images/bed.png', serviceName: 'Carpenter', rating: '4.0', price: '400' },
  { image: 'images/bed.png', serviceName: 'Carpenter', rating: '4.0', price: '400' },
  { image: 'images/bed.png', serviceName: 'Carpenter', rating: '4.0', price: '400' },
  { image: 'images/bed.png', serviceName: 'Carpenter', rating: '4.0', price: '400' },

];


const MostBookingSerives = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (direction) => {
    const scrollAmount = scrollRef.current.firstChild.offsetWidth + 16;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
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
        <i className="fa-solid fa-chevron-left arrows2" onClick={() => handleScroll('left')}></i>

        <div
          className={`thirdContainerMainInner ${isDragging ? 'dragging' : ''}`}
          ref={scrollRef}
          onMouseDown={startDragging}
          onMouseLeave={stopDragging}
          onMouseUp={stopDragging}
          onMouseMove={onDragging}
        >
          {services.map((srv, index) => (
            <MostBookingServicesItem key={index} {...srv} />
          ))}
        </div>

        <i className="fa-solid fa-chevron-right arrows2" onClick={() => handleScroll('right')}></i>
      </div>
    </div>
  );
};

export default MostBookingSerives;
