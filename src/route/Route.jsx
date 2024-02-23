import { Routes, Route } from "react-router-dom";
import { Home, About, Detail } from "../page";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<Detail />} />
    </Routes>
  )
}

export default AllRoutes