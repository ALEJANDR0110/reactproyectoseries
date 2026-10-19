import React, { Component } from 'react'
import ServiceSeries from '../services/ServiceSeries'
import { NavLink } from 'react-router-dom';

export default class PersonajesSerie extends Component {
    service = new ServiceSeries();

    state = {
        personajes: []
    }

    loadPersonajes = () => {
        this.service.getPersonajes(this.props.idserie).then(result => {
            this.setState({
                personajes: result
            })
        })
    }

    componentDidMount = () => {
        this.loadPersonajes();
    }

    render() {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-100 to-indigo-100 px-4 py-10 sm:px-8">
                <div className="mx-auto max-w-5xl">
                    <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-indigo-600">
                                Catálogo de series
                            </p>
                            <h1 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
                                Personajes de Serie{" "}
                                <span className="text-indigo-600">
                                    {this.props.idserie}
                                </span>
                            </h1>
                            <p className="mt-2 text-slate-500">
                                Explora los personajes que forman parte de esta serie.
                            </p>
                        </div>

                        <NavLink
                            to={"/detallesSerie/" + this.props.idserie}
                            className="inline-flex items-center justify-center gap-2 self-start rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 sm:self-auto"
                        >
                            <span aria-hidden="true">←</span>
                            Volver
                        </NavLink>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                        <div className="border-b border-slate-100 px-6 py-5">
                            <h2 className="text-lg font-bold text-slate-800">
                                Listado de personajes
                            </h2>
                            <p className="mt-1 text-sm text-slate-500">
                                Personajes disponibles en la serie
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                                        <th className="px-6 py-4 font-semibold">
                                            Personaje
                                        </th>
                                        <th className="px-6 py-4 text-center font-semibold">
                                            Imagen
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-slate-100">
                                    {
                                        this.state.personajes.map((personaje, index) => {
                                            return (
                                                <tr
                                                    key={index}
                                                    className="transition-colors duration-200 hover:bg-indigo-50/60"
                                                >
                                                    <td className="px-6 py-4 font-semibold text-slate-700">
                                                        {personaje.nombre}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="flex justify-center">
                                                            <img
                                                                src={personaje.imagen}
                                                                alt="p"
                                                                className="h-20 w-20 rounded-xl border border-slate-200 bg-slate-50 object-cover shadow-sm transition duration-200 hover:scale-105 hover:shadow-md"
                                                            />
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
