import React from "react";
import "./identificacion.css";

function Identificacion() {
  const sustancias = [
    { nombre: "Humedad", limite: "15,0% máximo" },
    { nombre: "Densidad Aparente", limite: "1,0 – 1,5 kg/L" },
    { nombre: "Granulometría, ASTM #40 (0,425 mm)", limite: "30,0% máximo" },
    { nombre: "Granulometría, ASTM #200 (0,075 mm)", limite: "65,0% máximo" },
  ];

  return (
    <section className="identificacion" id="identificacion">
      <h5 className="titulo">Identificación y Especificaciones Físico-Químicas</h5>
      <p className="texto" id="subtitulo">
      Identificación del Producto:
      </p>
      
      <ul className="listado">
        <li><strong>PRODUCTO: </strong>AGLUPEL ECO</li>
        <li><strong>Forma Física: </strong>Polvo grueso</li>
        <li><strong>Color: </strong>Beige / Marrón claro</li>
        <li><strong>Dosis Recomendada: </strong>30 kg / Tonelada</li>
        <li><strong>Presentación: </strong>Disponible en Big Bags de 1.250 kg y en bolsas de 25 kg para optimizar la logística</li>
      </ul>

      <div className="ContenedorTarjetas">
    
        <div className="cardTabla">
          <h4 className="titulo">Especificación Físico-Química</h4>
       

          <table className="tabla">
            <thead>
              <tr>
                <th>Parámetro</th>
                <th>Rango Especificado</th>
              </tr>
            </thead>
            <tbody>
              {sustancias.map((item, i) => (
                <tr key={i}>
                  <td>{item.nombre}</td>
                  <td className="valor">{item.limite}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}

export default Identificacion;