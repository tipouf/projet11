import { useFetchLogementById } from "../../hook/logementMemo.js";
import { Navigate, useParams } from "react-router-dom";
import { Carousel, Accordion, StarRanking } from "../../component";

const Detail = () => {
  const logement = useFetchLogementById(useParams().id);

  if (!logement) return <Navigate to="/404" />;

  return (
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
        <StarRanking rating={logement.rating} />
      </div>
      <div className="equipments">
        <Accordion title="Equipements">
          <>
            {logement.equipments.length === 0 ? (
              <p>Aucun équipement</p>
            ) : (
              <ul>
                {logement.equipments.map((equipment) => (
                  <li key={equipment}>{equipment}</li>
                ))}
              </ul>
            )}
          </>
        </Accordion>
      </div>
    </div>
  );
};

export default Detail;

