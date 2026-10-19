import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import MenuComponent from './MenuComponent'
import HomeComponent from './HomeComponent'
import DetallesSerie from './DetallesSerie';
import PersonajesSerie from './PersonajesSerie';
import NuevoPersonaje from './NuevoPersonaje';
import ModificarPersonaje from './ModificarPersonaje';

export default class Router extends Component {
    render() {
        function DetallesSerieElement() {
            let {idserie} = useParams();

            return(
                <DetallesSerie idserie={idserie} />
            )
        }

        function PersonajesSerieElement() {
            let {idserie} = useParams();

            return(
                <PersonajesSerie idserie={idserie} />
            )
        }

        return (
            <BrowserRouter>
            <MenuComponent />
                <Routes>
                    <Route path='/' element={<HomeComponent />} />
                    <Route path='/detallesSerie/:idserie' element={<DetallesSerieElement />} />
                    <Route path='/personajesSerie/:idserie' element={<PersonajesSerieElement />} />
                    <Route path='/create' element={<NuevoPersonaje />} />
                    <Route path='/modify' element={<ModificarPersonaje />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
