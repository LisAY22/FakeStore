import '../index.css';
import tienda3 from '../assets/tienda3.png';
import compras from '../assets/compras.png';

function Header() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md navbar">

          <div className="container-fluid">

            <a className="navbar-brand" href="#">
              <img src={tienda3} alt="Logo" width="50px" className="me-3" />
              FAKE STORE
            </a>

            <form className="d-flex justify-content-center" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn searchbar" type="submit">Search</button>
            </form> 

          <form className="d-flex">
            <button className="btn cartbtn" type="submit">
              <img src={compras} alt="Cart" width="40px" />
            </button>
          </form>

          </div>

        </nav>
      </header>
    </>
  )
}

export default Header;