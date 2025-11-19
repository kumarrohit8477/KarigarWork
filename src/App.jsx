import React from "react";
import { Routes, Route ,useLocation} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SecondContainer from "./components/SecondContainer";
import MostBookingSerives from "./components/MostBooking/MostBookingSerives";
import ServicesContainer from "./components/ServiceContainer/ServicesContainer";
import Footer from "./components/Footer";
import Login from "./pages/Loginpg";
import Cart from "./pages/Cart";
import ServiceType from "./components/ServiceType/ServiceType"; // service detail page

function App() {
  const location = useLocation();
  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/cart";
  return (
    <>
      {!hideNavbar && <Navbar />} 
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SecondContainer />
              <MostBookingSerives />
              <ServicesContainer />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Carpenter" element={<ServiceType />} />
        <Route path="/Plumber" element={<ServiceType />} />
      </Routes>
    </>
  );
}

export default App;
