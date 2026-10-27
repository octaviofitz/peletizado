import React from 'react';

import isologo from '../../IMG/isologo.webp'

import './footer.css';

function Footer() {
    return (
        <footer className='footer'>

            <div className='footer__inner'>
                <a href='/#top' className='logo'>
                    <img className='isologo' src={isologo} alt='Aglupel Eco'></img>
                    <span className='marca'>AGLUPEL<br />ECO</span>
                </a>

                <nav className='containerTexto' aria-label='Navegación del pie'>
                    <a className="link" href="/#nosotros">Nosotros</a>
                    <a className="link" href="/#ventajas">Ventajas</a>
                    <a className="link" href="/#identificacion">Identificación</a>
                    <a className="link" href="/#contacto">Contacto</a>
                </nav>
            </div>

            <p className='texto'>Un producto de Minerales Patagónicos S.A.</p>

           {/*  <div className='galide'>
            <p className='texto'>Desarrollado por   <a href='https://www.galide.com.ar' target='__blank' className='bold'>Galidé</a></p>
            </div> */}

        </footer>
    );
}

export default Footer;
