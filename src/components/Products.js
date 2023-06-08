import React from "react";
import "../styles/Products.css"; // Import the CSS file for styling

import product1 from "../images/products/1.jpg";
import product2 from "../images/products/2.jpg";
import product3 from "../images/products/3.jpg";
import product4 from "../images/products/4.jpg";
import product5 from "../images/products/5.jpg";
import product6 from "../images/products/6.jpg";
import product7 from "../images/products/7.jpg";
import product8 from "../images/products/8.jpg";
import product9 from "../images/products/9.jpg";

const productsList = [
  '2-1/2" Crusher Run',
  '1-1/2" Crusher Run',
  '1" Crusher Run',
  '4" Surge',
  '3/8" Screenings',
  '1-1/2" #57',
  '5/8" Chips',
  '1-1/2" Course Stone',
  "Recycled Asphalt",
  "Crushed Concrete",
  "Top Soil",
  "Mason Sand",
  "Pea Gravel",
  '5/8" Granite Chips',
];

const phoneNumber = "940-855-6507";

const Products = () => {
  return (
    <div>
      <div className="products-info">
        <h2>Products</h2>
        <ul>
          {productsList.map((product, index) => (
            <li key={index}>{product}</li>
          ))}
        </ul>
        <p>Free delivery within 25 miles</p>
        <p>(for orders of 10 cubic yards or more)</p>
        <p>Call: {phoneNumber}</p>
      </div>
      <div className="products-container">
        <div className="product">
          <img className="product-image" src={product1} alt="Product 1" />
        </div>
        <div className="product">
          <img className="product-image" src={product2} alt="Product 2" />
        </div>
        <div className="product">
          <img className="product-image" src={product3} alt="Product 3" />
        </div>
        <div className="product">
          <img className="product-image" src={product4} alt="Product 4" />
        </div>
        <div className="product">
          <img className="product-image" src={product5} alt="Product 5" />
        </div>
        <div className="product">
          <img className="product-image" src={product6} alt="Product 6" />
        </div>
        <div className="product">
          <img className="product-image" src={product7} alt="Product 7" />
        </div>
        <div className="product">
          <img className="product-image" src={product8} alt="Product 8" />
        </div>
        <div className="product">
          <img className="product-image" src={product9} alt="Product 9" />
        </div>
      </div>
    </div>
  );
};

export default Products;
