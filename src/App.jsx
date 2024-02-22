import { Header, Layout } from "./components";
import AllRoutes from "./Routes/Routes";
function App() {
  return (
    <>
      <Header />
      <Layout>
        <AllRoutes />
      </Layout>
    </>
  );
}

export default App;
