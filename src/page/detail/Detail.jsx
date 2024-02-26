import { useFetchLogementById } from "../../hook/logementMemo.js";
import { useParams } from "react-router-dom";
import "./Detail.scss";
import { Error404 } from "../.";
import { Carousel } from "../../component";

const Detail = () => {
  const { id } = useParams();
  const logement = useFetchLogementById(id);
  return logement ? (
    <div className="detail">
      <Carousel pictures={logement.pictures} />
      <h2>{logement.title}</h2>
      <p>{logement.location}</p>
      <div className="tags">
        {logement.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <p>{logement.description}</p>
      <div className="host">
        <p>{logement.host.name}</p>
      </div>
      <div className="rating">
        <p>{logement.rating}</p>
      </div>

      <div className="equipments">
        {logement.equipments.map((equipment) => (
          <p key={equipment}>{equipment}</p>
        ))}
      </div>
    </div>
  ) : (
    <Error404 />
  );
};

export default Detail;
