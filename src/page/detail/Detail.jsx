import { useFetchLogementById } from "../../hook/logementMemo.js";
import { Navigate, useParams } from "react-router-dom";
import { Carousel, Accordion, StarRanking } from "../../component";
import "./Detail.scss";

const Detail = () => {
  const logement = useFetchLogementById(useParams().id);

  if (!logement) return <Navigate to="/404" />;

  return (
    <div className="detail">
      <Carousel pictures={logement.pictures} />
      <div className="info-container">
        <div className="info-container_title">
          <h2>{logement.title}</h2>
          <h3>{logement.location}</h3>
          <div className="tags">
            {logement.tags.map((tag) => (
              <span key={tag} className="tags">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="info-container_host">
          <p>{logement.host.name}</p>
        </div>
      </div>

      <div className="rating">
        <StarRanking rating={logement.rating} />
      </div>

      <div className="detail-container">
        <div className="description">
          <Accordion title="Description">
            <p>{logement.description}</p>
          </Accordion>
        </div>
        <div className="equipments">
          <Accordion title="Equipements">
            {logement.equipments.length === 0 ? (
              <p>Aucun équipement</p>
            ) : (
              <ul>
                {logement.equipments.map((equipment) => (
                  <li key={equipment}>{equipment}</li>
                ))}
              </ul>
            )}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Detail;
