import React from "react";
import "./casoExito.css";

function CasoExito() {
  return (
    <section className="casoExito">
      <div className="casoExito__wrap">
        <span className="casoExito__dot" aria-hidden="true" />

        <h2 className="casoExito__title">
          Caso de Éxito en <br /> Nutrición
        </h2>

        <blockquote className="casoExito__quote">
          “La implementación de VULGEL CR 40 en nuestra formulación permitió
          reducir significativamente los marcadores hepáticos en nuestro ganado
          de engorde, mejorando la conversión alimenticia en un 5% tras el primer
          ciclo.”
        </blockquote>

        <div className="casoExito__author">
          <div className="casoExito__avatar" aria-hidden="true">
            {/* Reemplazá esta imagen por la tuya si querés */}
            <img
              src="https://i.pravatar.cc/120?img=12"
              alt="Foto de Dr. Roberto M."
            />
          </div>

          <div className="casoExito__authorText">
            <p className="casoExito__name">Dr. Roberto M.</p>
            <p className="casoExito__role">
              Nutricionista Animal - Feedlot “El Trébol”
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default CasoExito;