import { useState, useEffect, useRef } from 'react';

import Header  from "./components/Header";
import Footer  from "./components/Footer";
import ProductCard  from "./components/ProductCard";

function App() {

  // Create an state to hold the product list
  const [products, setProducts] = useState([]);

  // Create a state to hold the search term
  const [searchTerm, setSearchTerm] = useState('');

  // The efect hook to fetch data from the backend
  useEffect(() => {

    const url = searchTerm
      ? `http://localhost:3000/products?search=${searchTerm}`
      : 'http://localhost:3000/products';
    
    // Call to the backend API to get products
    fetch(url) 
      .then(response => response.json()) 
      .then(data => {
        // Save the products in the state
        setProducts(data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }, [searchTerm]); // Re-run the effect when searchTerm changes 

  return (
    <div>
      <Header searchTerm={searchTerm} 
        onSearchChange={setSearchTerm} />
      <br></br>

      <div className="container my-4">
        <div className="row">
          {
            products.map(product => (
              <div key={product.id} className="col-md-4 mb-4">
              <ProductCard
                  picture={product.picture}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                />
            </div>
            ))
          }
        </div>
      </div>

      <br></br>
      <Footer />
    </div>
  );
}

export default App;