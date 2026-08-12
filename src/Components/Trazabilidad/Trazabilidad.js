import React from 'react';
import './trazabilidad.css';

function Trazabilidad() {
  return (
    <section className='trazabilidad' id='evidencia'>
      
      <h4 className='titulo'>Trazabilidad y Seguridad (Compromiso MPSA)</h4>

        <p className='texto'>
        Detrás de <strong>AGLUPEL ECO</strong> está la confianza de <strong>Minerales Patagónicos S.A. (MPSA)</strong>, con un sistema de gestión que garantiza la seguridad y la calidad desde el origen:
        </p>
        <ul className='listado'>
          <li className='texto'><strong>Trazabilidad Garantizada:</strong> Control total de la cadena productiva, desde la extracción en la mina hasta su incorporación al proceso industrial.</li>
          <li className='texto'><strong>Inocuidad y Calidad:</strong> Fabricado bajo Buenas Prácticas de Manufactura (BPM) y certificado bajo la norma ISO 9001:2015.</li>
          <li className='texto'><strong>Habilitación SENASA:</strong> Cumple con las exigencias del Servicio Nacional de Sanidad y Calidad Agroalimentaria para la seguridad en piensos.</li>
          <li className='texto'><strong>Respaldo de I+D:</strong> Para la tranquilidad de nuestros clientes, ofrecemos auditorías y controles de proveedores para corroborar el cumplimiento técnico de cada lote.</li>
        </ul>


    </section>
  );
}

export default Trazabilidad;