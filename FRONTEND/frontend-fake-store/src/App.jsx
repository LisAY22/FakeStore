import Header  from "./components/Header";
import Footer  from "./components/Footer";
import ProductCard  from "./components/ProductCard";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col">
            <ProductCard />
          </div>
          <div className="col">
            <ProductCard />
          </div>
          <div className="col">
            <ProductCard />
          </div>
        </div>
      </div>
      <br></br>
      <Footer />
    </div>
  );
}

export default App;