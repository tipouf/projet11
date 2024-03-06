import { Banner } from "../../component";
import {Grid} from "../../template";
import { useFetchLogements } from "../../hook/logementMemo.js";

const Home = () => {

  const logementData = useFetchLogements();


  if (!logementData) {
    return <p>Loading...</p>
  }

  if (logementData.length === 0) {
    return <p>No data found</p>
  }

  return (
    <>
      <Banner text="Chez vous, partout et ailleurs" />
      <Grid logementData={logementData} />
    </>
  )
}

export default Home