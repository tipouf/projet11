import Propstype from "prop-types";
import { FaStar } from "react-icons/fa";
import "./StarRanking.scss";

const StarRanking = ({ rating }) => {
  return (
    <div className="star-ranking">
      {[...Array(5)].map((_, index) => {
        const key = `star-${index}`;
        return (
          <span key={key}>
            <FaStar className={`star ${index < rating ? "" : "empty"}`} />
          </span>
        );
      })}
    </div>
  );
};

StarRanking.propTypes = {
  rating: Propstype.string.isRequired,
};

export default StarRanking;