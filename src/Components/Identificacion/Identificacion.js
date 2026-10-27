import React from "react";
import "./identificacion.css";

function Identificacion() {
  const producto = [
    { nombre: "Producto", valor: "AGLUPEL ECO" },
    { nombre: "Forma Física", valor: "Polvo grueso" },
    { nombre: "Color", valor: "Beige / Marrón claro" },
    { nombre: "Dosis Recomendada", valor: "30 kg / Tonelada" },
    { nombre: "Presentación", valor: "Big Bags de 1.250 kg" },
  ];

  const sustancias = [
    { nombre: "Humedad", limite: "15,0% máximo" },
    { nombre: "Densidad Aparente", limite: "1,0 – 1,5 kg/L" },
    { nombre: "Granulometría, ASTM #40 (0,425 mm)", limite: "30,0% máximo" },
    { nombre: "Granulometría, ASTM #200 (0,075 mm)", limite: "65,0% máximo" },
  ];

  return (
    <section className="identificacion" id="identificacion">
      <div className="identificacion__contenido">

        <div className="identificacion__encabezado">
          <p className="paratexto">Ficha técnica</p>
          <h2 className="titulo">
            Identificación y Especificaciones Físico-Químicas
          </h2>
        </div>

        <div className="identificacion__info">
          <h4 className="tituloCuadro">Identificación del Producto</h4>

          <dl className="listado">
            {producto.map((item) => (
              <div className="fila" key={item.nombre}>
                <dt>{item.nombre}</dt>
                <dd>{item.valor}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="cardTabla">
          <h4 className="tituloCuadro tituloTabla">
            Especificación Físico-Química
          </h4>

          <table className="tabla">
            <thead>
              <tr>
                <th>Parámetro</th>
                <th>Rango Especificado</th>
              </tr>
            </thead>

            <tbody>
              {sustancias.map((item) => (
                <tr key={item.nombre}>
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
