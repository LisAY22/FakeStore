import { useState, useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';

import Header  from "./components/Header";
import Footer  from "./components/Footer";
import ProductCard  from "./components/ProductCard";
import HeaderCart from './components/HeaderCart';
import Cart from './components/Cart';

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
      <Routes>

        <Route path="/" element={
          <>
            <Header 
              searchTerm={searchTerm} 
              onSearchChange={setSearchTerm} 
            />
            <div className="container my-4">
              <div className="row">
                {
                  products.map(product => (
                    <div key={product.id} className="col-md-4 mb-4">
                    <ProductCard
                        id={product.id}
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
        </>
      } />

      <Route path="/cart" element={
        <>
          <HeaderCart />
          <Cart />
        </>
      } />

      </Routes>

      <br></br>
      <Footer />
    </div>
  );
}

export default App;