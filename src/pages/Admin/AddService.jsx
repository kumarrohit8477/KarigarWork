import React, { useState } from "react";

function AddService() {
  const [newService, setNewService] = useState({
    name: "",
    price: "",
    category: "",
    rating: "",
    image: ""
  });

  const handleChange = (e) => {
    setNewService({ ...newService, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await fetch("http://localhost:5000/services", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newService),
    });

    alert("Service added successfully!");
  };

  return (
    <div>
      <h2>Add New Service</h2>

      <input
        type="text"
        name="name"
        placeholder="Service Name"
        onChange={handleChange}
      />
      
      <input
        type="number"
        name="price"
        placeholder="Price"
        onChange={handleChange}
      />

      <input
        type="text"
        name="category"
        placeholder="Category (e.g., carpenter)"
        onChange={handleChange}
      />

      <input
        type="text"
        name="image"
        placeholder="Image URL"
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Add Service</button>
    </div>
  );
}

export default AddService;
