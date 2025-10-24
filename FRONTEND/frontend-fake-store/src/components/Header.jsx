import '../index.css';
import tienda3 from '../assets/tienda3.png';
import compras from '../assets/compras.png';
import { Link } from 'react-router-dom';

function Header({ searchTerm, onSearchChange}) {
  // This function stops the page refresh
  const handleSubmit = (event) => {
    event.preventDefault(); 
    // We don't need to do anything else, 
    // because the state is already updated "onChange"
  }

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md navbar">

          <div className="container-fluid">

            <a className="navbar-brand">
              <img src={tienda3} alt="Logo" width="50px" className="me-3" />
              FAKE STORE
            </a>

            <form className="d-flex justify-content-center" role="search" onSubmit={handleSubmit}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchTerm}
                onChange={e => onSearchChange(e.target.value)}/>
            </form> 


          <Link to="/cart" className="btn cartbtn">
              <img src={compras} alt="Cart" width="40px" />
          </Link>

          </div>

        </nav>
      </header>
    </>
  )
}

export default Header;