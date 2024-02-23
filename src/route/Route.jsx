import { Routes, Route } from "react-router-dom";
import { Home, About } from "../page";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default AllRoutes