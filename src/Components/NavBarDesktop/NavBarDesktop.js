import React from "react";
import Logo from "../../IMG/logo.webp";
import "./navBarDesktop.css";

function NavBarDesktop() {
  return (
    <header className="navDesktop">
      <div className="navDesktop__inner">

        <div className="navDesktop__brand">
          <img src={Logo} alt="Aglupel" className="logo" />
        </div>

        <nav
          className="navDesktop__links"
          aria-label="Navegación principal"
        >
          <a href="#nosotros" className="navDesktop__link">
            Nosotros
          </a>

          <a href="#evidencia" className="navDesktop__link">
            Evidencia
          </a>

          <a href="#calidad" className="navDesktop__link">
            Calidad
          </a>

          <a href="#contacto" className="navDesktop__link">
            Contacto
          </a>
        </nav>

      </div>
    </header>
  );
}

export default NavBarDesktop;