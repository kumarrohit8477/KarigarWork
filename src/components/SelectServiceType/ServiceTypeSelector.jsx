import "./ServiceTypeSelector.css";
import { Link } from "react-router-dom";

const ServiceTypeSelector = () => {
  return (
    <div className="hggt">
    <div className="service-selector-container">
      <h3 className="selector-title">Select Service Type</h3>
      <div className="options-row">
        <Link to="/Carpenter/Carpnew">
          <button className="option-box">🛠️ New Work</button>
        </Link>

        {/* ✅ Repairing (route will be added below) */}
        <Link to="/Carpenter/Carprep">
          <button className="option-box">🔧 Repairing</button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default ServiceTypeSelector;
