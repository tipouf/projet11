import { Header, Layout } from "./components";
import "./App.scss";
import AllRoutes from "./Routes/Routes";
function App() {
  return (
    <div className="app">
      <Header />
      <Layout>
        <AllRoutes />
      </Layout>
    </div>
  );
}

export default App;
