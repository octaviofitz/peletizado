import React from 'react';
import Nav from 'react-bootstrap/Nav';


import './footer.css';

function Footer() {
    return (
        <footer className='footer'>

            <a className='logo'>VULGEL CR 40</a>

                <div className='containerTexto'>
                <Nav.Link className="link" href="/#adsorbente">Adsorbente</Nav.Link>
                <Nav.Link className="link" href="/#evidencia">Evidencia</Nav.Link>
                <Nav.Link className="link" href="/#calidad">Calidad</Nav.Link>
                <Nav.Link className="link" href="/#contacto">Contacto</Nav.Link>
            </div>

            <div className='galide'>
            <p className='texto'>Desarrollado por <a href='https://www.galide.com.ar' target='__blank' className='bold'>Galidé</a></p>
            </div>
           
        </footer>
    );
}

export default Footer;