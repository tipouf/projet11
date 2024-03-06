import PropTypes from "prop-types";
import {Card} from "../../component";
import "./Grid.scss";

const Grid = ( { logementData }) => {
  return (
    <div className="grid">
      {logementData.map((logement) => (
        <Card key={logement.id} logement={logement} />
      ))}
    </div>
  )
}

Grid.propTypes = {
  logementData: PropTypes.array.isRequired
}


export default Grid