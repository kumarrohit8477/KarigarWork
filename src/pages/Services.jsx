import { useEffect, useState } from "react";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <h1>Services</h1>
      {services.map((s) => (
        <p key={s.id}>{s.name} - ₹{s.price}</p>
      ))}
    </div>
  );
}

export default Services;
