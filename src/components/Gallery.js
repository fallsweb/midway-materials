import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "../styles/Gallery.css";

import bobcat from "../images/gallery/bobcat.jpg";
import gravel from "../images/gallery/gravel.png";
import hauler from "../images/gallery/hauler.png";

const Gallery = () => {
  return (
    <div className="gallery">
      <Carousel
        className="gallery-carousel"
        infiniteLoop={true}
        showThumbs={false}
        showArrows={true}
        stopOnHover={false}
        width={440}
        autoPlay={true}
        showStatus={false}
        autoPlaySpeed={3000}
      >
        <div>
          <img src={bobcat} alt="1" />
        </div>
        <div>
          <img src={gravel} alt="2" />
        </div>
        <div>
          <img src={hauler} alt="3" />
        </div>
      </Carousel>
    </div>
  );
};

export default Gallery;
