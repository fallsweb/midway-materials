import React from "react";

import { Link } from "react-router-dom";

import logoImage from "../images/logo.png";
import "../styles/Header.css";

const Header = () => {
  const phoneNumber = "940-855-6507";
  const address = "7643 Burkburnett Rd, Wichita Falls, TX 76305";

  const handlePhoneNumberClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleAddressClick = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div className="header">
      <div className="header-contact">
        <a
          href={`tel:${phoneNumber}`}
          className="contact-link"
          onClick={handlePhoneNumberClick}
        >
          {phoneNumber}
        </a>
        <span className="separator"> | </span>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            address
          )}`}
          className="contact-link"
          onClick={handleAddressClick}
        >
          {address}
        </a>
      </div>
      <div className="header-logo">
        <Link to="/">
          <img src={logoImage} alt="Logo" />
        </Link>
      </div>
      <div className="header-nav">
        <Link to="/products" className="header-nav-button">
          Products
        </Link>
        <Link to="/services" className="header-nav-button">
          Services
        </Link>
        {/* <a href="/about" className="header-nav-button">
          About
        </a> */}
      </div>
      <div className="nav-title">
        <p>MIDWAY MATERIALS</p>
      </div>
    </div>
  );
};

export default Header;
