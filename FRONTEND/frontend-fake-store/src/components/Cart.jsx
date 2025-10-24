import { useState, useEffect } from 'react';


function Cart() {
    const [items, setItems] = useState([]);

    // Function to fetch cart items from the API
    const fetchCartItems = () => {
      fetch('http://localhost:3000/cart')
        .then(res => res.json())
        .then(data => setItems(data));
    };

    // Fetch the items when the component loads
    useEffect(() => {
      fetchCartItems();
    }, []); // The empty [] means this runs once on load

    // Function to increase quantity
    const handleIncrease = (cart_id, currentQuantity) => {
      const newQuantity = currentQuantity + 1;
      fetch(`http://localhost:3000/cart/update/${cart_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity: newQuantity })
      })
      .then(() => {
        fetchCartItems(); // Refresh the cart list
      });
    };

    // Function to decrease quantity
    const handleDecrease = (cart_id, currentQuantity) => {
      if (currentQuantity == 1) {
        // Quantity is 1, so delete the item
        fetch(`http://localhost:3000/cart/remove/${cart_id}`, {
          method: 'DELETE'
        })
        .then(() => {
          fetchCartItems(); // Refresh the cart list
        });
      } else {
        // Just update the quantity
        const newQuantity = currentQuantity - 1;
        fetch(`http://localhost:3000/cart/update/${cart_id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ quantity: newQuantity })
        })
        .then(() => {
          fetchCartItems(); // Refresh the cart list
        });
      }
    };

      return (
      <div className="container my-4">
        <h2 className='h2-cart'>Your Cart</h2>
        <hr />
        {items.map(item => (
          <div key={item.cart_id} className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <img src={item.picture} alt={item.name} style={{ width: '50px', marginRight: '15px' }} />
              <strong>{item.name}</strong>
            </div>
            <div>
              <button className="btn btn-secondary btn-sm" onClick={() => handleDecrease(item.cart_id, item.quantity)}>-</button>
              <span className="mx-3">{item.quantity}</span>
              <button className="btn btn-secondary btn-sm" onClick={() => handleIncrease(item.cart_id, item.quantity)}>+</button>
              <strong className="ms-4">Q{item.price * item.quantity}</strong>
            </div>
          </div>
        ))
        }
        {
            items.reduce((total, item) => total + item.price * item.quantity, 0) === 0 ? (
                <h4 className='h4-cart'>Your cart is empty</h4>
            ) : (
                <h4 className='h4-cart'>Total: Q{items.reduce((total, item) => total + item.price * item.quantity, 0)}</h4>
            )
        }
      </div>
    );
};

export default Cart; 