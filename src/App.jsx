import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import FirstContainer from "./components/FirstContainer/FirstContainer";
import SecondContainer from "./components/SecondContainer/SecondContainer";
import MostBookingSerives from "./components/MostBooking/MostBookingSerives";
import ServicesContainer from "./components/ServiceContainer/ServicesContainer";
import ServiceTypeSelector from "./components/SelectServiceType/ServiceTypeSelector";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Loginpg";
import Cart from "./pages/Cart";
import Electrician from "./components/ServiceType/HomeImprovementService/Electrician"; // service detail page
import Mason from "./components/ServiceType/HomeImprovementService/Mason";
import Aluminiumwork from "./components/ServiceType/HomeImprovementService/Aluminiumwork";
import FlooringNTiling from "./components/ServiceType/HomeImprovementService/FlooringNTiling";
import PaintingnWaterproofing from "./components/ServiceType/HomeImprovementService/PaintingnWaterproofing";
import SteelNWelding from "./components/ServiceType/HomeImprovementService/SteelNWelding";
import Carpnew from "./components/ServiceType/HomeImprovementService/Carpenter/Carpnew";
import Carprep from "./components/ServiceType/HomeImprovementService/Carpenter/Carprep";
import PlumNew from "./components/ServiceType/HomeImprovementService/Plumber/PlumNew";
import Acservice from "./components/ServiceType/AppliancesServices/Acservice";
import Microwave from "./components/ServiceType/AppliancesServices/Microwave";
import Refrigerator from "./components/ServiceType/AppliancesServices/Refrigerator";
import Washingmachine from "./components/ServiceType/AppliancesServices/Washingmachine";
import BathroomNkitchen from "./components/ServiceType/CleaningNpest/BathroomNkitchen";
import Pestcontrol from "./components/ServiceType/CleaningNpest/Pestcontrol";
import SofaNcarpet from "./components/ServiceType/CleaningNpest/SofaNcarpet";
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
              <FirstContainer />
              <SecondContainer />
              <MostBookingSerives />
              <ServicesContainer />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Electrician" element={<Electrician />} />
        <Route path="/Carpenter" element={<ServiceTypeSelector />} />
        <Route path="/Mason" element={<Mason />} />
        <Route path="/Aluminiumwork" element={<Aluminiumwork />} />
        <Route path="/FlooringNTiling" element={<FlooringNTiling />} />
        <Route path="/PaintingnWaterproofing" element={<PaintingnWaterproofing />} />
        <Route path="/SteelNWelding" element={<SteelNWelding />} />
        <Route path="/" element={<ServiceTypeSelector />} />
        <Route path="/Carpenter/Carpnew" element={<Carpnew />} />
        <Route path="/Carpenter/Carprep" element={<Carprep />} />
        <Route path="/Plumber" element={<PlumNew />} />
        <Route path="/Acservice" element={<Acservice/>} />
        <Route path="/Microwave" element={<Microwave/>} />
        <Route path="/Refrigerator" element={<Refrigerator/>} />
        <Route path="/Washingmachine" element={<Washingmachine/>} />
        <Route path="/BathroomNkitchen" element={<BathroomNkitchen/>} />
        <Route path="/Pestcontrol" element={<Pestcontrol/>} />
        <Route path="/SofaNcarpet" element={<SofaNcarpet/>} />
      </Routes>
    </>
  );
}

export default App;
