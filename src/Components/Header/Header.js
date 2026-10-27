import React from 'react';
import Isotipo from '../Utility/Isotipo/Isotipo';
import './header.css';

function Header() {
  return (
    <section className='header' id='top'>
      <div className='header-contenido'>

        <div className='header-texto'>
          <p className='paratexto'>Bentonita sódica natural</p>

          <h1 className='titulo'>
            AGLUPEL
            <span className='titulo-eco'>ECO</span>
          </h1>

          <p className='segundoTitulo'>
            Aglutinante para pellet natural y de alta cohesión
          </p>

          <div className='contenedorBotones'>
            <a href="#contacto" className='boton boton-primario'>Contactar</a>
            <a href="#ventajas" className='boton boton-secundario'>Ver ventajas</a>
          </div>
        </div>

        <div className='header-grafico'>
          <Isotipo className='isotipo' />
        </div>

      </div>

      <ul className='header-datos'>
        <li>
          <span className='dato'>30 kg/t</span>
          <span className='etiqueta'>Dosis recomendada</span>
        </li>
        <li>
          <span className='dato'>1.250 kg</span>
          <span className='etiqueta'>Big Bags</span>
        </li>
        <li>
          <span className='dato'>ISO 9001</span>
          <span className='etiqueta'>Calidad certificada</span>
        </li>
      </ul>
    </section>
  );
}

export default Header;
