import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Carousel.scss";

const Carousel = ({ pictures }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const next = () => {
    setCurrentImageIndex((currentImageIndex + 1) % pictures.length);
  };

  const previous = () => {
    setCurrentImageIndex((currentImageIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="carousel">
      <button className="carousel-arrow-left" onClick={previous} role="button">
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <div className="carousel-img">
        <img src={pictures[currentImageIndex]} alt={`image ${currentImageIndex + 1}`} />
      </div>
      <button className="carousel-arrow-right " onClick={next} role="button" >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

Carousel.propTypes = {
  pictures: PropTypes.array,
};

export default Carousel;