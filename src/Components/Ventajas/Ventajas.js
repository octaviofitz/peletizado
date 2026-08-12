import React from 'react';
import './ventajas.css';

function Ventajas() {
  return (
    <section className='ventajas' id='ventajas'>
      
      {/* <p className='paratexto'>CIENCIA APLICADA</p> */}
      <h4 className='titulo'>Ventajas Competitivas y Mecanismo de Acción</h4>

        <p className='texto'>
        Su objetivo principal es la <strong>mejora mecánica</strong> del producto final a través de un proceso de aglutinación eficiente:
        </p>
        <ul className='listado'>
          <li className='texto'><strong>Efecto Cementante:</strong> Las partículas de bentonita rodean y cementan las partículas más grandes del material base, formando una masa estable y cohesionada que potencia la capacidad de formación de pellets.</li>
          <li className='texto'><strong>Resistencia a la Compresión:</strong> Aumenta significativamente la firmeza estructural del pellet, evitando roturas o desprendimientos durante la manipulación industrial o logística.</li>
          <li className='texto'><strong>Eficiencia en Planta:</strong> Actúa como un lubricante natural, reduciendo el desgaste de los equipos de peletizado.</li>
          <li className='texto'><strong>Inerte y Seguro:</strong> Es un material inodoro e insípido que no altera las propiedades organolépticas ni transmite olores o sabores indeseados.</li>
        </ul>


    </section>
  );
}

export default Ventajas;