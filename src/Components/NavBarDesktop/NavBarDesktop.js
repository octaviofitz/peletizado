import React from "react";
import Logo from "../../IMG/logo.webp";
import "./navBarDesktop.css";

function NavBarDesktop() {
  return (
    <header className="navDesktop">
      <div className="navDesktop__inner">

        <a href="#top" className="navDesktop__brand">
          <img src={Logo} alt="Aglupel Eco" className="logo" />
        </a>

        <nav
          className="navDesktop__links"
          aria-label="Navegación principal"
        >
          <a href="#nosotros" className="navDesktop__link">
            Nosotros
          </a>

          <a href="#ventajas" className="navDesktop__link">
            Ventajas
          </a>

          <a href="#identificacion" className="navDesktop__link">
            Identificación
          </a>

          <a href="#contacto" className="navDesktop__cta">
            Contacto
          </a>
        </nav>

      </div>
    </header>
  );
}

export default NavBarDesktop;
