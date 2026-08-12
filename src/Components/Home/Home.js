import React from 'react';


import Header from '../Header/Header';
import Solucion from '../Solucion/Solucion';
import Ventajas from '../Ventajas/Ventajas';
import Identificacion from '../Identificacion/Identificacion';
import CasoExito from '../CasoExito/CasoExito';
import Contacto from '../Contacto/Contacto';
import Trazabilidad from '../Trazabilidad/Trazabilidad';



function Home() {
    console.log({ Header, Solucion, Ventajas, Identificacion, CasoExito, Contacto });

    return (
        
        <div>
            <Header />
            <Solucion />
            <Ventajas />
            <Identificacion />
            <Trazabilidad />
            {/* <CasoExito /> */}
            <Contacto />
        </div>
    );
}

export default Home;