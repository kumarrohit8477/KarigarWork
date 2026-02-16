import React from "react";
import { useEffect } from "react";
import { Routes, Route, useLocation, } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import FirstContainer from "./components/FirstContainer/FirstContainer";
import SecondContainer from "./components/SecondContainer/SecondContainer";
import MostBookingSerives from "./components/MostBooking/MostBookingSerives";
import ServicesContainer from "./components/ServiceContainer/ServicesContainer";
import ServiceTypeSelector from "./components/SelectServiceType/ServiceTypeSelector";
import Footer from "./components/Footer/Footer";

// Pages
import Login from "./pages/Loginpg";
import Cart from "./pages/Cart";
import Consultation from "./pages/Consultation";
import AddService from "./pages/Admin/AddService";

// Service Pages
import Electrician from "./components/ServiceType/HomeImprovementService/Electrician";
import Mason from "./components/ServiceType/HomeImprovementService/Mason";
import Aluminiumwork from "./components/ServiceType/HomeImprovementService/Aluminiumwork";
import FlooringNTiling from "./components/ServiceType/HomeImprovementService/FlooringNTiling";
import PaintingnWaterproofing from "./components/ServiceType/HomeImprovementService/PaintingnWaterproofing";
import SteelNWelding from "./components/ServiceType/HomeImprovementService/SteelNWelding";
import Carpenter from "./components/ServiceType/HomeImprovementService/Carpenter";
import Plumber from "./components/ServiceType/HomeImprovementService/Plumber";
import FurnitureRepair from "./components/ServiceType/HomeImprovementService/FurnitureRepair";

// Appliances
import Acservice from "./components/ServiceType/AppliancesServices/Acservice";
import Microwave from "./components/ServiceType/AppliancesServices/Microwave";
import Refrigerator from "./components/ServiceType/AppliancesServices/Refrigerator";
import Washingmachine from "./components/ServiceType/AppliancesServices/Washingmachine";
import Ro from "./components/ServiceType/AppliancesServices/Ro";
// Cleaning & Pest
import Bnk from "./components/ServiceType/CleaningNpest/Bnk";
import Pestcontrol from "./components/ServiceType/CleaningNpest/Pestcontrol";
import SofaNcarpet from "./components/ServiceType/CleaningNpest/SofaNcarpet";
import Watertank from "./components/ServiceType/CleaningNpest/Watertank";

//Most Booking Services

function App() {
  const location = useLocation();
  useEffect(() => {
    // Make the request to your backend URL
    fetch('http://localhost:5000/api/workers')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Check your console to see the data
      })
      .catch(error => console.error('Error connecting:', error));
  }, []);

  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/cart";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <FirstContainer />
              <SecondContainer />
              <MostBookingSerives />
              <ServicesContainer />
              <Footer />
            </>
          }
        />

        {/* STATIC PAGES */}
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/consultation" element={<Consultation />}/>
        <Route path="" element=""/>
        <Route path="/admin/addservice" element={<AddService />} />

        <Route path="/ServiceTypeSelector" element={<ServiceTypeSelector />} />

        {/* HOME IMPROVEMENT SERVICES */}
        <Route path="/Electrician" element={<Electrician />} />
        <Route path="/Mason" element={<Mason />} />
        <Route path="/Aluminiumwork" element={<Aluminiumwork />} />
        <Route path="/FlooringNTiling" element={<FlooringNTiling />} />
        <Route path="/PaintingnWaterproofing" element={<PaintingnWaterproofing />} />
        <Route path="/SteelNWelding" element={<SteelNWelding />} />
        <Route path="/Carpenter" element={<Carpenter />} />
        <Route path="/Plumber" element={<Plumber />} />
        <Route path="/FurnitureRepair" element={<FurnitureRepair />} />

        {/* APPLIANCES */}
        <Route path="/Acservice" element={<Acservice />} />
        <Route path="/Microwave" element={<Microwave />} />
        <Route path="/Refrigerator" element={<Refrigerator />} />
        <Route path="/Washingmachine" element={<Washingmachine />} />
        <Route path="/Ro" element={<Ro/>} />

        {/* CLEANING & PEST */}
       <Route path="/Bathroom&kitchen" element={<Bnk />} />
        <Route path="/Pestcontrol" element={<Pestcontrol />} />
        <Route path="/SofaNcarpet" element={<SofaNcarpet />} />
        <Route path="/Watertank" element={<Watertank />} />
      </Routes>
    </>
  );
}

export default App;
