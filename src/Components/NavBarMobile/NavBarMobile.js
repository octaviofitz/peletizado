import React from 'react';
import Logo from '../../IMG/logo.webp'
import './navBarMobile.css';

function NavBarMobile() {
  return (
    <div className="navMobile">

      <a href="#top" className="logoBox">
        <img src={Logo} alt='Logo Aglupel Eco' className='logo'/>
      </a>

      <a href="#contacto" className="ctaMobile">CONTACTO</a>

    </div>
  );
}

export default NavBarMobile;
