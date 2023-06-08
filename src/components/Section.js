import React from "react";

import { Link } from "react-router-dom";

import "../styles/Section.css";

const Section = () => {
  return (
    <div className="section">
      <div className="section-items">
        <div className="section-item">
          <p>
            <h2>Products</h2>
            <br />
            <br />
            <p>
              We provide a wide selection of materials, including various sizes
              of crusher run, stone, sand, and gravel, to meet your construction
              and landscaping needs.
            </p>
            <br />
            <br />
          </p>
          <br />
          <Link to="/products" className="section-button">
            Learn More
          </Link>
        </div>
        <div className="section-item-divider"></div>
        <div className="section-item">
          <p>
            <h2>Services</h2>
            <br />
            <br />
            <p>
              Our services cover different aspects of site preparation, ensuring
              professional assistance for your construction and landscaping
              projects.
            </p>
            <br />
            <br />
          </p>
          <br />
          <Link to="/services" className="section-button">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section;
