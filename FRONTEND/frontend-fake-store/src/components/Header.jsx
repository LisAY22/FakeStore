import '../index.css';
import tienda2 from '../assets/tienda2.png';

function Header() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={tienda2} alt="Logo" width="50" height="50" className="d-inline-block align-text-top" />
              FAKE STORE
            </a>

            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row">
                <li className="nav-item px-2"> 
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item dropdown px-2">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                  </ul>
                </li>
              </ul>
            </div>

            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form> 

          </div>
        </nav>
      </header>
    </>
  )
}

export default Header;