import React from 'react';
import Logo from '../../IMG/logo.webp'
import './navBarMobile.css';

function NavBarMobile() {
  return (
    <div className="navMobile">

      <div className="logoBox">
        <div className="logoIcon">
          <img src={Logo} alt='Logo Aglupel' className='logo'/>
        </div>
        {/* <span className="logoText">VULGEL CR 40</span> */}
      </div>

    </div>
  );
}

export default NavBarMobile;