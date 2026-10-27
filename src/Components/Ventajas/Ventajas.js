import React from 'react';
import './ventajas.css';

const ventajas = [
  {
    titulo: 'Efecto Cementante',
    texto: 'Las partículas de bentonita rodean y cementan las partículas más grandes del material base, formando una masa estable y cohesionada que potencia la capacidad de formación de pellets.',
  },
  {
    titulo: 'Resistencia a la Compresión',
    texto: 'Aumenta significativamente la firmeza estructural del pellet, evitando roturas o desprendimientos durante la manipulación industrial o logística.',
  },
  {
    titulo: 'Eficiencia en Planta',
    texto: 'Actúa como un lubricante natural, reduciendo el desgaste de los equipos de peletizado.',
  },
  {
    titulo: 'Inerte y Seguro',
    texto: 'Es un material inodoro e insípido que no altera las propiedades organolépticas ni transmite olores o sabores indeseados.',
  },
];

function Ventajas() {
  return (
    <section className='ventajas' id='ventajas'>
      <div className='ventajas__contenido'>

        <p className='paratexto'>Mecanismo de acción</p>
        <h4 className='titulo'>Ventajas Competitivas y Mecanismo de Acción</h4>

        <p className='texto intro'>
          Su objetivo principal es la <strong>mejora mecánica</strong> del producto final a través de un proceso de aglutinación eficiente:
        </p>

        <ul className='cards'>
          {ventajas.map((item, i) => (
            <li className='card' key={item.titulo}>
              <span className='numero'>{String(i + 1).padStart(2, '0')}</span>
              <h5 className='subtitulo'>{item.titulo}</h5>
              <p className='texto'>{item.texto}</p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}

export default Ventajas;
