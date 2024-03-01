import { useState } from "react";
import PropTypes from "prop-types";
import "./Carousel.scss";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Carousel = ({ pictures, title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const next = () => {
    setCurrentImageIndex((currentImageIndex + 1) % pictures.length);
  };

  const previous = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + pictures.length) % pictures.length
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-arrow-left arrow" onClick={previous}>
        <MdOutlineKeyboardArrowLeft />
      </button>
      <div className="carousel-img">
        <img
          src={pictures[currentImageIndex]}
          alt={`${title} ${currentImageIndex + 1}`}
        />
      </div>
      <button className="carousel-arrow-right arrow" onClick={next}>
        <MdOutlineKeyboardArrowRight />
      </button>
    </div>
  );
};

Carousel.propTypes = {
  pictures: PropTypes.array,
  title: PropTypes.string,
};

export default Carousel;
