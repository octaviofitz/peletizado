import React from 'react';
import {Routes, BrowserRouter, Route} from 'react-router-dom'

import NavbarMobile from '../NavBarMobile/NavBarMobile';
import NavBarDesktop from '../NavBarDesktop/NavBarDesktop';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';

/* import WhatsappBoton from '../Utility/WhatsappBoton/WhatsappBoton' */

function Router() {
    return (
        <>
        <BrowserRouter>
            <NavbarMobile />
             <NavBarDesktop /> 
            <div className='body'>
            <Routes>
            <Route path='/' element={<Home />} />
            </Routes>
            <Footer />
            {/* <WhatsappBoton /> */}
            </div>
            </BrowserRouter>
        </>
    );
}

export default Router;