import React from 'react';


import Header from '../Header/Header';
import Nosotros from '../Nosotros/Nosotros';
import Eficiencia from '../Eficiencia/Eficiencia';
import Calidad from '../Calidad/Calidad';
import CasoExito from '../CasoExito/CasoExito';
import Contacto from '../Contacto/Contacto';
import Trazabilidad from '../Trazabilidad/Trazabilidad';



function Home() {
    console.log({ Header, Nosotros, Eficiencia, Calidad, CasoExito, Contacto });

    return (
        
        <div>
            <Header />
            <Nosotros />
            <Eficiencia />
            <Calidad />
            <Trazabilidad />
            <CasoExito />
            <Contacto />
        </div>
    );
}

export default Home;