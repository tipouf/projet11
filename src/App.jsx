import { Header, Footer } from "./component";
import { Layout } from "./template";
import AllRoutes from "./route/Route";
function App() {
  return (
    <>
      <Header />
      <Layout>
        <AllRoutes />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
