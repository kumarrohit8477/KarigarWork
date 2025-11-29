import React from 'react'
import './ServiceBox.css'

const ServiceBox = ({ serviceName, items }) => {

  const scrollToSection = (name) => {
    const id = name.toLowerCase() + "-section";
    const section = document.getElementById(id);

    if (section) {
      const yOffset = -170; // height of your navbar
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }

  };

  return (
    <div className="service-container">
      <h2>{serviceName}</h2>
      <div className="items-row">
        {items.map((item, index) => (
          <div
            key={index}
            className="item-box"
            onClick={() => scrollToSection(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceBox;
