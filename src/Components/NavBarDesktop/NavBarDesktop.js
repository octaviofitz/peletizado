import React from "react";
import "./navBarDesktop.css";

function NavBarDesktop() {
  return (
    <header className="navDesktop">
      <div className="navDesktop__inner">
        {/* Logo */}
        <div className="navDesktop__brand">
          <div className="navDesktop__icon">V</div>
          <span className="navDesktop__name">VULGEL CR 40</span>
        </div>

        {/* Links */}
        <nav className="navDesktop__links" aria-label="Navegación principal">
          <a href="#nosotros" className="navDesktop__link">Nosotros</a>
          <a href="#evidencia" className="navDesktop__link">Evidencia</a>
          <a href="#calidad" className="navDesktop__link">Calidad</a>
          <a href="#contacto" className="navDesktop__cta">Contactar</a>
        </nav>
      </div>
    </header>
  );
}

export default NavBarDesktop;