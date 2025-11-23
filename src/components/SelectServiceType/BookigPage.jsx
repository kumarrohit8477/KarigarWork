import React, { useState } from "react";
import ServiceTypeSelector from "./ServiceTypeSelector";

const BookingPage = () => {
  const [serviceType, setServiceType] = useState("");

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <ServiceTypeSelector onSelect={(value) => setServiceType(value)} />

      {serviceType && (
        <p style={{ textAlign: "center" }}>
          You selected: <strong>{serviceType}</strong>
        </p>
      )}
    </div>
  );
};

export default BookingPage;
