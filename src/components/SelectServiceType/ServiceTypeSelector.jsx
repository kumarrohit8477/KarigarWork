import React, { useState } from "react";
import { Link, Routes } from "react-router-dom";
import "./ServiceTypeSelector.css";
import Carnew from ".components"

const ServiceTypeSelector = ({ onSelect }) => {
  const [selected, setSelected] = useState("");

  const handleSelect = (type) => {
    setSelected(type);
    onSelect(type);
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Carnew />
            <div className="service-selector-container">
              <h3 className="selector-title">Select Service Type</h3>

              <div className="options-row">
                <button className={`option-box ${selected === "repairing" ? "active" : ""}`} onClick={() => handleSelect("repairing")}>
                  🔧 Repairing
                </button>
                <button className={`option-box ${selected === "newWork" ? "active" : ""}`} onClick={() => handleSelect("newWork")}>
                  🛠️ New Work
                </button>
              </div>
            </div >
          </
      
    </Routes>

  );
};

export default ServiceTypeSelector;
