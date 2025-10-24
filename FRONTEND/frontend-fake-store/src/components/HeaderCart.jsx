import { Link } from 'react-router-dom';
import flechaIzquierda from '../assets/flechaIzquierda.png';
import tienda3 from '../assets/tienda3.png';

function HeaderCart() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md navbar">
                    <div className="container-fluid">
                        <Link to="/" className="btn homebtn">
                            <img src={flechaIzquierda} alt="back" width="50px" />
                        </Link>
                    </div>

                     <a className="navbar-brand">
                        <img src={tienda3} alt="Logo" width="50px" className="me-3" />
                        FAKE STORE
                    </a>

                </nav>
            </header>
        </>
    );
}

export default HeaderCart;