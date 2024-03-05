import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import "./Carousel.scss";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Carousel = ({ pictures, title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentImageIndex((currentImageIndex + 1) % pictures.length);
  }, [currentImageIndex, pictures]);

  const previous = useCallback(() => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + pictures.length) % pictures.length
    );
  }, [currentImageIndex, pictures]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowLeft") {
        previous();
      } else if (event.key === "ArrowRight") {
        next();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentImageIndex, next, previous]);

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
