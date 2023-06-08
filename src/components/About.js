import React from "react";
import "../styles/About.css";
import chester from "../images/chester.jpeg";

const About = () => {
  return (
    <div className="about">
      <h1>Chester Boyd</h1>
      <br />
      <div className="about-content">
        <img src={chester} alt="Chester Boyd" />
        <br />
        <p>
          At Midway Materials, we proudly carry forward the legacy of our
          founder, Chester Boyd. Starting with nothing more than an old blue
          truck and unwavering commitment to ethical business practices, Chester
          built a thriving enterprise that left an indelible mark on our
          community. His larger-than-life personality and zest for life continue
          to inspire us as we uphold his values and dedication to our customers.
          We strive to emulate Chester's spirit of adventure and his belief in
          the power of genuine connections, ensuring that his legacy lives on in
          everything we do.
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;
