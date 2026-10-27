import React from 'react';

import logoVulgel from '../../IMG/marcas/vulgel.webp';
import logoBentonita from '../../IMG/marcas/bentonita.webp';
import logoRubicat from '../../IMG/marcas/rubicat.webp';

import './nuestrasMarcas.css';

const marcas = [
    {
        nombre: 'Vulgel',
        logo: logoVulgel,
        rubro: 'Nutrición animal',
        titulo: 'Secuestrante de micotoxinas',
        descripcion: 'Aglutinante natural de alto rendimiento para bovinos y otras especies.',
        url: 'https://secuestrantemicotoxinas.com.ar/',
        color: '#ff3c00',
    },
    {
        nombre: 'Bentonita',
        logo: logoBentonita,
        rubro: 'Bentonita',
        titulo: 'Bentonita sódica natural',
        descripcion: 'Bentonita certificada de nuestro yacimiento para cada industria.',
        url: 'https://bentonita.com.ar/',
        color: '#1d6b87',
    },
    {
        nombre: 'Rubicat',
        logo: logoRubicat,
        rubro: 'Mascotas',
        titulo: 'Arena sanitaria',
        descripcion: 'Venta de arena sanitaria para gatos elaborada a base de bentonita.',
        url: 'https://rubicat.com.ar/',
        color: '#00909c',
    },
];

function NuestrasMarcas() {
    return (
        <section className='nuestrasMarcas' id='marcas'>
            <div className='nuestrasMarcas__contenido'>
                <p className='paratexto'>Desde el yacimiento hasta tu negocio</p>
                <h3 className='titulo'>Nuestras Marcas</h3>
                <p className='descripcion'>Productos a base de bentonita, elaborados por nosotros para cada industria.</p>

                <div className='cards'>
                    {marcas.map((marca) => (
                        <a
                            key={marca.nombre}
                            href={marca.url}
                            target='_blank'
                            rel='noreferrer noopener'
                            className='card'
                            style={{ '--color-marca': marca.color }}
                        >
                            <div className='logoContainer'>
                                <img src={marca.logo} alt={marca.nombre} className='logoMarca' loading='lazy' />
                            </div>
                            <div className='contenidoMarca'>
                                <span className='rubro'>{marca.rubro}</span>
                                <h4 className='tituloMarca'>{marca.titulo}</h4>
                                <p className='dataMarca'>{marca.descripcion}</p>
                                <span className='botonMarca'>
                                    Visitar sitio <span aria-hidden='true' className='flecha'>→</span>
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default NuestrasMarcas;
