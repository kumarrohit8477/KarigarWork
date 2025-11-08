import React from 'react'
import ServiceBox from './ServiceBox';

const CarpenterBox = () => {
  const carpenterItems = [
    "Bed",
    "Almirah",
    "Kitchen",
    "Doors",
    "Tables",
    "Chairs",
    "Windows",
    "Shelves",
    "Cabinets",
  ];
  return (<div style={{ display: "flex", justifyContent: "center", padding: "30px" }}>
    <ServiceBox serviceName="Carpenter" items={carpenterItems} />
  </div>
  )
}

export default CarpenterBox