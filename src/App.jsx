import React from "react";
import { Routes, Route ,useLocation} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import FirstContainer from "./components/FirstContainer/FirstContainer";
import SecondContainer from "./components/SecondContainer/SecondContainer";
import MostBookingSerives from "./components/MostBooking/MostBookingSerives";
import ServicesContainer from "./components/ServiceContainer/ServicesContainer";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Loginpg";
import Cart from "./pages/Cart";
import Carpenter from "./components/ServiceType/Carpenter"; // service detail page
import Plumber from "./components/ServiceType/Plumber"; // service detail page

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
            <FirstContainer/>
              <SecondContainer />
              <MostBookingSerives />
              <ServicesContainer />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Carpenter" element={<Carpenter />} />
        <Route path="/Plumber" element={<Plumber />} />
      </Routes>
    </>
  );
}

export default App;
