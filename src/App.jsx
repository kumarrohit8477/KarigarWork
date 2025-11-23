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
import Carpenter from "./components/ServiceType/HomeImprovementService/Carpenter"; // service detail page
import Plumber from "./components/ServiceType/HomeImprovementService/Plumber"; // service detail page
import Electrician from "./components/ServiceType/HomeImprovementService/Electrician"; // service detail page
import Mason from "./components/ServiceType/HomeImprovementService/Mason";
import Aluminiumwork from "./components/ServiceType/HomeImprovementService/Aluminiumwork";
import FlooringNTiling from "./components/ServiceType/HomeImprovementService/FlooringNTiling"; 
import PaintingnWaterproofing from "./components/ServiceType/HomeImprovementService/PaintingnWaterproofing";
import SteelNWelding from "./components/ServiceType/HomeImprovementService/SteelNWelding";
import ServiceTypeSelector from "./components/SelectServiceType/ServiceTypeSelector";

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
        <Route path="/Electrician" element={<Electrician />} />
        <Route path="/Mason" element={<Mason />} />
        <Route path="/Aluminiumwork" element={<Aluminiumwork />} />
        <Route path="/FlooringNTiling" element={<FlooringNTiling />} />
        <Route path="/PaintingnWaterproofing" element={<PaintingnWaterproofing />} />
        <Route path="/SteelNWelding" element={<SteelNWelding />} />
      </Routes>
    </>
  );
}

export default App;
