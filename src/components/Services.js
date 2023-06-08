import React from "react";

import "../styles/Services.css";
import Gallery from "./Gallery";

const serviceList = [
  "Skid Steer Spreading",
  "Skid Steer Leveling",
  "Skid Steer Rolling",
  "Skid Steer Brush Hogging",
  "Post Hole Digging",
];

const phoneNumber = "940-855-6507";

const Services = () => {
  return (
    <div>
      <div className="services-info">
        <h2>Services</h2>
        <ul>
          {serviceList.map((product, index) => (
            <li key={index}>{product}</li>
          ))}
        </ul>
        <p>Call: {phoneNumber}</p>
      </div>
      <div>
        <Gallery />
      </div>
    </div>
  );
};

export default Services;
