import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <nav class="navbar navbar-expand-md navbar-light fixed-top navbar-main">
        <div className="container mt-5">
          <a class="navbar-brand" href="#">
            <img
              src="/kiko.png"
              alt="Logo"
              width="150"
              height="70"
              className="d-inline-block align-text-top"
            />
          </a>

          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="flase"
            aria-label="Barra de navegacion"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <div className="nav ms-auto text-dark">
              <Link className='nav-link active' to="/">Inicio</Link>
              <Link className='nav-link active' to="/nosotros">Nosotros</Link>
              <Link className='nav-link active' to="/contacto">Contacto</Link>
            </div>
          </div>
        </div>
      </nav>
    
  );
};

export default Navbar;
