import PropTypes from "prop-types";
import "./Banner.scss";
const Banner = ({ text }) => {
  return (
    <div className="banner">
      <span>{text}</span>
    </div>
  );
};

Banner.propTypes = {
  text: PropTypes.string,
};

export default Banner;
