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

export default Grid