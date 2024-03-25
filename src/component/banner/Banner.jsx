import PropTypes from "prop-types";
import "./Banner.scss";
import banner from "../../assets/banner.jpeg";
import banner2 from "../../assets/banner2.jpeg";
const Banner = ({ text = "" }) => {

  return (
    <div className={"banner"}>
      <img src={text ? banner : banner2} alt="banner hero" className={text ? "" : "banner2"} />
      <span>{text}</span>
    </div>
  );
};

Banner.propTypes = {
  text: PropTypes.string,
};

export default Banner;
