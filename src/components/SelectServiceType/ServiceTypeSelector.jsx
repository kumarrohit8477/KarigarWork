import React, { useState } from "react";
import "./ServiceTypeSelector.css";

const ServiceTypeSelector = ({ onSelect }) => {
  const [selected, setSelected] = useState("");

  const handleSelect = (type) => {
    setSelected(type);
    onSelect(type); // pass the selection to parent
  };

  return (
    <div className="service-selector-container">
      <h3 className="selector-title">Select Service Type</h3>

      <div className="options-row">
        <div
          className={`option-box ${selected === "repairing" ? "active" : ""}`}
          onClick={() => handleSelect("repairing")}
        >
          🔧 Repairing
        </div>

        <div
          className={`option-box ${selected === "newWork" ? "active" : ""}`}
          onClick={() => handleSelect("newWork")}
        >
          🛠️ New Work
        </div>
      </div>
    </div>
  );
};

export default ServiceTypeSelector;
