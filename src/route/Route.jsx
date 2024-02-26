import { Routes, Route } from "react-router-dom";
import { Home, About, Detail, Error404 } from "../page";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<Detail />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}

export default AllRoutes