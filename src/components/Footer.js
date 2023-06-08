import React from "react";

import "../styles/Footer.css";

const Footer = () => {
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
    <div className="footer">
      <div className="footer-contact">
        <p>
          <h3 className="footer-header">MIDWAY MATERIALS</h3>
          <br />
          {address}
          <br />
          <br />
          {phoneNumber}
        </p>
      </div>
      <div className="footer-hours">
        <p>
          <h3 className="footer-header">HOURS OF OPERATION</h3>
          <br />
          Monday – Friday: 8am to 5pm
          <br />
          <br />
          Saturday & Sunday: By Appointment
        </p>
      </div>
      <div className="footer-tag">
        <p>
          © 2023 | Midway Materials
          <br />
          Built by:{" "}
          <a
            href="http://wf-web-master.com/"
            style={{ fontWeight: "bold", color: "white" }}
            target="_blank"
            rel="noreferrer"
          >
            WF Web Master
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
