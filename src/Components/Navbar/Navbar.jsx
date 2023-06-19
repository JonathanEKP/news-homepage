import "./Navbar.css";
import logo from "../../assets/images/logo.svg";
import iconMenu from "../../assets/images/icon-menu.svg";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a href="#" className="navbar-brand">
          <img src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-icon">
            <img src={iconMenu} alt="" />
          </span>
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  New
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Popular
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Trending
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Categories
                </a>
              </li>
 
            
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
