import { useState, useEffect, useRef } from 'react';

import { Routes, Route } from 'react-router-dom';

import Header  from "./components/Header";
import Footer  from "./components/Footer";
import ProductCard  from "./components/ProductCard";
import HeaderCart from './components/HeaderCart';

function App() {

  // Create an state to hold the product list
  const [products, setProducts] = useState([]);

  // Create a state to hold the search term
  const [searchTerm, setSearchTerm] = useState('');

  // Create a state to hold the cart items
  const [cartItems, setCartItems] = useState([]);

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

  // Fetch cart items when the cart page is loaded
  useEffect(() => {
    fetch('http://localhost:3000/cart')
      .then(response => response.json())
      .then(data => {
        setCartItems(data);
      })
      .catch(error => {
        console.error("Error fetching cart items:", error);
      });
  }, []); // Empty dependency array means this runs once on mount

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
          <div className="container">
            <h2 className="h2-cart">Your Cart</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                    </tr>
                    {
                      cartItems.map(item => (
                        <tr key={item.cart_id}>
                          <td>{item.name}</td>
                          <td>Q{item.price}</td>
                          <td>{item.quantity}</td>
                          <td>Q{item.price * item.quantity}</td>
                        </tr>
                      ))
                    }
                </thead>
            </table>
          </div>
        </>
      } />

      </Routes>

      <br></br>
      <Footer />
    </div>
  );
}

export default App;