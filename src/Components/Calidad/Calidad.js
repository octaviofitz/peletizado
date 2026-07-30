import React from "react";
import "./calidad.css";

function Calidad() {
  const sustancias = [
    { nombre: "Humedad", limite: "15,0% máximo" },
    { nombre: "Densidad Aparente", limite: "1,0 – 1,5 kg/L" },
    { nombre: "Granulometría, ASTM #40 (0,425 mm)", limite: "30,0% máximo" },
    { nombre: "Granulometría, ASTM #200 (0,075 mm)", limite: "65,0% máximo" },
  ];

  return (
    <section className="calidad" id="calidad">
      <h5 className="titulo">Identificación y Especificaciones Físico-Químicas</h5>
      <p className="texto">
      <strong>Identificación del Producto</strong>
      </p>
      
      <ul>
        <li><strong>PRODUCTO: </strong>AGLUPEL ECO</li>
        <li><strong>Forma Física: </strong>Polvo grueso</li>
        <li><strong>Color: </strong>Beige / Marrón claro</li>
        <li><strong>Dosis Recomendada: </strong>30 kg / Tonelada</li>
        <li><strong>Presentación: </strong>Disponible en Big Bags de 1.250 kg y en bolsas de 25 kg para optimizar la logística</li>
      </ul>

      <div className="ContenedorTarjetas">
        {/* <div className="card1">
          <p className="titulo">Certificaciones</p>

          <div className="containerCard1">
            <div>
              <p className="destacado">GMP+ B2</p>
            </div>
            <div>
              <p className="texto">
                <strong>Feed Safety Management</strong>
                <br />
                Productores certificados de ingredientes alimenticios.
              </p>
            </div>
          </div>

          <div className="containerCard1">
            <div>
              <p className="destacado">ISO 9001</p>
            </div>
            <div>
              <p className="texto">
                <strong>Calidad 2015</strong>
                <br />
                Respaldo a las Buenas Prácticas de Manufactura.
              </p>
            </div>
          </div>
        </div>
 */}
        <div className="cardTabla">
          <h4 className="titulo">Especificación Físico-Química</h4>
         {/*  <p className="texto">
            Límites máximos estrictos para garantizar la inocuidad.
          </p> */}

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

       {/*  <div className="cardDosif">
          <div className="dosifLeft">
            <h4 className="dosifTitulo">Dosificación y Presentación</h4>
            <p className="dosifSub">
              Optimizado para la logística y el uso eficiente en planta.
            </p>

            <div className="dosifBox">
              <p className="dosifLabel">DOSIS RECOMENDADA</p>
              <p className="dosifValue">1 a 3 Kg / Ton</p>
              <p className="dosifSmall">De alimento balanceado</p>
            </div>
          </div>

          <div className="dosifRight">
            <div className="dosifPacks">
              <div className="packCard">
                <p className="packTop">Bolsas</p>
                <p className="packKg">25 Kg</p>
              </div>

              <div className="packCard">
                <p className="packTop">Big Bags</p>
                <p className="packKg">1.250 Kg</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Calidad;