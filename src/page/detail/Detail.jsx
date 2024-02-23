import { useFetchLogementById } from "../../hook/logementMemo.js";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const logement = useFetchLogementById(id);
  return logement ? (
    <div className="detail">
      <img src={logement.cover} alt={logement.title} />
      <h2>{logement.title}</h2>
      <p>{logement.description}</p>
    </div>
  ) : (
    <p>404</p>
  );
};

export default Detail;
