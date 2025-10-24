function ProductCard({id, picture, name, description, price}) {
    // Create the function to call the API
    const handleAddToCart = () => {
        console.log('Adding product to cart:', id);

        // Call your new /cart endpoint
        fetch('http://localhost:3000/cart/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                product_id: id,
                quantity: 1 // For now, we'll just add 1
            })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Product added to cart:', data);
                alert(`${name} has been added to your cart!`);
            })
            .catch(error => {
                console.error('Error adding to cart:', error);
            });
    };

    return(
        <div className="card h-100">

            <img src={picture} className="card-img-top" alt={name} />

            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">Q{price}</p>
                <a className="btn btncolor" onClick={handleAddToCart}>ADD TO CART</a>
            </div>
        
        </div>
    )
}

export default ProductCard;