import React from 'react';
import Isotipo from '../Utility/Isotipo/Isotipo';
import './trazabilidad.css';

const compromisos = [
  {
    titulo: 'Trazabilidad Garantizada',
    texto: 'Control total de la cadena productiva, desde la extracción en la mina hasta su incorporación al proceso industrial.',
  },
  {
    titulo: 'Inocuidad y Calidad',
    texto: 'Fabricado bajo Buenas Prácticas de Manufactura (BPM) y certificado bajo la norma ISO 9001:2015.',
  },
  {
    titulo: 'Habilitación SENASA',
    texto: 'Cumple con las exigencias del Servicio Nacional de Sanidad y Calidad Agroalimentaria para la seguridad en piensos.',
  },
  {
    titulo: 'Respaldo de I+D',
    texto: 'Para la tranquilidad de nuestros clientes, ofrecemos auditorías y controles de proveedores para corroborar el cumplimiento técnico de cada lote.',
  },
];

function Trazabilidad() {
  return (
    <section className='trazabilidad' id='evidencia'>
      <Isotipo className='trazabilidad__isotipo' />

      <div className='trazabilidad__contenido'>
        <p className='paratexto'>Compromiso MPSA</p>
        <h4 className='titulo'>Trazabilidad y Seguridad</h4>

        <p className='texto intro'>
          Detrás de <strong>AGLUPEL ECO</strong> está la confianza de <strong>Minerales Patagónicos S.A. (MPSA)</strong>, con un sistema de gestión que garantiza la seguridad y la calidad desde el origen:
        </p>

        <ul className='listado'>
          {compromisos.map((item) => (
            <li className='item' key={item.titulo}>
              <h5 className='subtitulo'>{item.titulo}</h5>
              <p className='texto'>{item.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Trazabilidad;
