function ProductCard({picture, name, description, price}) {
    return(
        <div className="card h-100">

            <img src={picture} className="card-img-top" alt={name} />

            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">Q{price}</p>
                <a href="#" className="btn btncolor">ADD TO CART</a>
            </div>
        
        </div>
    )
}

export default ProductCard;