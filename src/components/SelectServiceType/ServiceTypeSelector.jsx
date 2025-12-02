import "./ServiceTypeSelector.css";
import { Link } from "react-router-dom";

const ServiceTypeSelector = () => {
  return (
    <div className="hggt">
    <div className="service-selector-container">
      <h3 className="selector-title">Select Service Type</h3>
      <div className="options-row">

        <Link to="/Bathroom&kitchen">
          <button className="option-box">🛠️ Bathroom & Kitchen</button>
        </Link>

        <Link to="/SofaNcarpet">
          <button className="option-box">🔧 Sofa & Carpet</button>
        </Link>

        <Link to="/Watertank">
          <button className="option-box">🔧 Water Tank</button>
        </Link>

        <Link to="/Pestcontrol">
          <button className="option-box">🔧 Pest control</button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default ServiceTypeSelector;
