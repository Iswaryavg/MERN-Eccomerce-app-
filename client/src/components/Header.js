import React from "react";
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <a className="navbar-brand" href="ad">
        MERN CRUD DEMO
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="ad">
           Home<span class="sr-only">(current)</span>
          </a>
          <a className="nav-item nav-link" href="ad">
            Portfolio
          </a>
          <a className="nav-item nav-link" href="ad">
            About
          </a>
          <a className="nav-item nav-link" href="ad">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Header;