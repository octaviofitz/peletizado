import React from 'react';
import './solucion.css';

// ✅ recomendación: import local para que no dependa de URL
import imgNueva from '../../IMG/nosotros.webp';

function Solucion() {
  return (
    <section className='solucion' id='nosotros'>
      <div>
        <h3 className='titulo'>La Solución para la Máxima Cohesión</h3>
        <p className='texto'>
        <strong>AGLUPEL ECO</strong> aprovecha las propiedades adhesivas de la bentonita sódica natural para dar forma, consistencia y resistencia a materiales peletizados.
        </p>
        <p className='texto'>
        Está diseñado para procesos de peletizado que buscan minimizar las pérdidas por desgaste, prevenir el desgranamiento y optimizar la dureza final del producto durante su manipulación, transporte y uso.
        </p>
        <p className='texto'><strong>Asegure la resistencia a la compresión y la durabilidad de sus pellets.</strong></p>
       
      </div>

      {/* ✅ wrapper para recortar sin romper layout */}
      <div className="solucion__media">
        <img className='img' src={imgNueva} alt="VULGEL CR 40" />
      </div>
    </section>
  );
}

export default Solucion;