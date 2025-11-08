
import React from "react";
import "./FirstContainer.css";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

const FirstContainer = () => {
  const services = [
    { image: "src/assets/images/caricon.png", label: "Carpenter" },
    { image: "images/elecicon.png", label: "Electrician" },
    { image: "images/plumicon.png", label: "Plumber" },
    { image: "images/cleaningicon.png", label: "Cleaning" },
    { image: "images/acicon.png", label: "AC Service" },
    { image: "images/roicon.png", label: "RO Service" },
  ];

  const stats = [
    {
      icon: "src/assets/icons/rating.svg",
      value: "4.8",
      text: "Service rating*",
    },
    {
      icon: "src/assets/icons/users.svg",
      value: "12M+",
      text: "Customers Globally*",
    },
  ];

  return (
    <div className="firstContainer">
      <LeftContainer
        title="Home services at your doorstep"
        prompt="What are you looking for?"
        services={services}
        stats={stats}
      />
      <RightContainer image="src/assets/images/banner.png" />
    </div>
  );
};

export default FirstContainer;
