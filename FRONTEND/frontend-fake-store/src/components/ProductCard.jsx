import tienda2 from '../assets/tienda2.png';

function ProductCard(){
    return(
        <div class="card">
            <img src={tienda2} class="card-img-top" alt="Tienda" />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" class="btn btn-primary">ADD TO CART</a>
            </div>
        </div>
    )
}

export default ProductCard;