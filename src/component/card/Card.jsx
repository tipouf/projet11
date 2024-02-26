import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import "./Card.scss"
const Card = ( { logement }) => {
  return (
    <article key={logement.id}>
    <Link to={`/logement/${logement.id}`}>
      <div className="card">
      <img src={logement.cover} alt={logement.title} />
      <h3>{logement.title}</h3>
      </div>
    </Link>
  </article>
  )
}

Card.propTypes = {
  logement: PropTypes.object
}

export default Card