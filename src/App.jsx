import { Header, Layout } from "./components";
import "./App.scss";
import { Home, About } from "./pages";
import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <div className="app">
      <Header />
      <Layout>
          <Routes>
            <Route path="/" element={<Home /> }
              exact
            />
            <Route path="/about" element={<About />}
              exact
            />
          </Routes>
      </Layout>
    </div>
  );
}

export default App;