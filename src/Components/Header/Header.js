import React from 'react';
import './header.css';

function Header() {
  return (
    <section className='header'>
      <div className='header-contenido'>
       {/*  <p className='paratexto'>
          Solución Premium para Bovinos, Aves y Cerdos
        </p> */}

        <h1 className='titulo'>
          AGLUPEL ECO
          <br />
          <div className='segundoTitulo'>PELETIZADO NATURAL Y 
          AGLUTINACIÓN DE ALTA COHESIÓN</div>
        </h1>

       {/*  <h2 className='subtitulo'>
          <strong>VULGEL CR 40:</strong> El secuestrante de micotoxinas natural de alto
          rendimiento basado en Bentonita Sódica de alta pureza.
        </h2> */}

        <div className='contenedorBotones'>
          <button className='boton boton-primario'>
            Solicitar Ficha Técnica
          </button>

          <button className='boton boton-secundario'>
            <a href="#contacto">
            Contactar
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Header;