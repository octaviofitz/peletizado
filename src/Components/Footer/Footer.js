import React from 'react';
import Nav from 'react-bootstrap/Nav';

import isologo from '../../IMG/isologo.webp'

import './footer.css';

function Footer() {
    return (
        <footer className='footer'>

            <div className='logo'>
                <img className='isologo' src={isologo} alt='aglupel'></img>
            </div>

                <div className='containerTexto'>
                <Nav.Link className="link" href="/#nosotros">Nosotros</Nav.Link>
                <Nav.Link className="link" href="/#ventajas">Ventajas</Nav.Link>
                <Nav.Link className="link" href="/#identificacion">Identificación</Nav.Link>
                <Nav.Link className="link" href="/#contacto">Contacto</Nav.Link>
            </div>

           {/*  <div className='galide'>
            <p className='texto'>Desarrollado por   <a href='https://www.galide.com.ar' target='__blank' className='bold'>Galidé</a></p>
            </div> */}
           
        </footer>
    );
}

export default Footer;