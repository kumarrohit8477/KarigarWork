import React from "react";
import MidboxIcon from "./MidboxIcon";
import StatBox from "./StatBox";
import "./LeftContainer.css";

const LeftContainer = ({ title, prompt, services, stats }) => {
  return (
    <div className="lfirstContainer">
      <div className="upbox">{title}</div>

      <div className="midbox">
        <p id="midboxpara">{prompt}</p>
        {services.map((service, index) => (
          <MidboxIcon key={index} image={service.image} label={service.label} />
        ))}
      </div>

      <div className="botbox">
        {stats.map((stat, index) => (
          <StatBox
            key={index}
            icon={stat.icon}
            value={stat.value}
            text={stat.text}
          />
        ))}
      </div>
    </div>
  );
};

export default LeftContainer;
