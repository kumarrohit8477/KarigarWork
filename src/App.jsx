import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SecondContainer from "./components/SecondContainer";
import MostBookingSerives from "./components/MostBooking/MostBookingSerives";
import ServicesContainer from "./components/ServiceContainer/ServicesContainer";
import Footer from "./components/Footer";
import Login from "./pages/Loginpg";
import Cart from "./pages/Cart";
import ServiceType from "./components/ServiceType/ServiceType"; // <-- Missing import added

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              {/* Uncomment when needed */}
              {/* 
              */}
              <SecondContainer />
              <MostBookingSerives />
              <ServicesContainer />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/servicetype" element={<ServiceType />} />
      </Routes>
    </>
  );
}

export default App;
