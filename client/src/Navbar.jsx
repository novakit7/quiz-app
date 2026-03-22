import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        
        {/* Logo / Brand */}
        <Link className="navbar-brand" to="/">
          <i className="fa-brands fa-quinscape"></i>QuizApp
        </Link>

        {/* Toggle button (mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            
            <li className="nav-item">
              <Link className="nav-link" to="/"><i className="fa-solid fa-house"></i>Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about"><i className="fa-solid fa-circle-info"></i>About Us</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;