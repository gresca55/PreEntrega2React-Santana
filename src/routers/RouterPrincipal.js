import React from 'react'
import {Routes, Route, NavLink, BrowserRouter} from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Nosotros } from '../components/Nosotros';
import { Salud } from '../components/Salud';
import { Tienda } from '../components/Tienda';
import { Contactenos } from '../components/Contactenos';
import {Error} from '../components/Error';
import { HeaderNav } from '../layout/HeaderNav';
import { Footer } from '../layout/Footer';
import { Leyenda } from '../layout/Leyenda';

export const RouterPrincipal = () => {
  return (

        <BrowserRouter>

           {/*HEADER Y NAVEGACION  */}
           <HeaderNav/>
           {/* leyenda  */}

                    <Leyenda/>
                    <hr/>

                <Routes>

                    <Route path='/' element={<Inicio/>}/>
                    <Route path='/inicio' element={<Inicio/>}/>
                    <Route path='/nosotros' element={<Nosotros/>}/>
                    <Route path='/salud' element={<Salud/>}/>
                    <Route path='/tienda' element={<Tienda/>}/>
                    <Route path='/contactenos' element={<Contactenos/>}/>
                    <Route path="*" element={<Error/>}/>
                </Routes> 
                <hr/>
                <h1> pie de pagina</h1>

                  {/*FOOTER */}
              <Footer/>    
        </BrowserRouter>
    
  )
}
