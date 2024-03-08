import { useNavigate } from 'react-router-dom';
import "./Error.scss";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="error404">
      <h1>404</h1>
      <p>Oups! cette page n&apos;existe pas.</p>
      <button onClick={() => navigate("/")}>Retourner sur la page d’accueil</button>
    </div>
  )
}

export default Error404