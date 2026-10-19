import React, { Component } from 'react'
import ServiceSeries from '../services/ServiceSeries'
import cargando from '../assets/images/cargando.gif'
import { NavLink } from 'react-router-dom';

export default class DetallesSerie extends Component {
    service = new ServiceSeries();

    state = {
        serCargada: false,
        serie: null
    }

    loadSerie = () => {
        this.service.getSerie(this.props.idserie).then(result => {
            this.setState({
                serCargada: true,
                serie: result
            })
        })
    }

    componentDidMount = () => {
        this.loadSerie();
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.idserie != this.props.idserie) {
            this.loadSerie();
        }
    }

    
    render() {
        if (this.state.serCargada == true) {
            return (
                <div className="min-h-screen bg-gradient-to-br from-slate-100 to-indigo-100 px-4 py-12">
                    <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-white shadow-xl">
                        <div className="relative bg-slate-900">
                            <img
                                src={this.state.serie.imagen}
                                alt="imagen"
                                className="h-72 w-full object-cover opacity-90 sm:h-96"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent"></div>

                            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
                                <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                                    {this.state.serie.nombre}
                                </h1>
                                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white shadow-lg backdrop-blur-md">
                                    <span className="text-xl">⭐</span>
                                    <span className="text-sm font-medium text-slate-200">
                                        IMDB
                                    </span>
                                    <span className="text-lg font-bold">
                                        {this.state.serie.puntuacion}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-start justify-between gap-5 p-6 sm:flex-row sm:items-center sm:p-10">
                            <div>
                                <h2 className="text-xl font-bold text-slate-800">
                                    Explora la serie
                                </h2>
                                <p className="mt-1 text-sm text-slate-500">
                                    Descubre todos los personajes de esta historia.
                                </p>
                            </div>

                            <NavLink
                                to={"/personajesSerie/" + this.state.serie.idSerie}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-md transition duration-200 hover:bg-indigo-700 hover:shadow-lg active:scale-[0.98] sm:w-auto"
                            >
                                Ver personajes
                                <span aria-hidden="true">→</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 to-indigo-100 p-6">
                    <div className="flex flex-col items-center gap-4 rounded-2xl bg-white p-8 shadow-lg">
                        <img
                            src={cargando}
                            alt="cargando"
                            className="h-24 w-24 object-contain"
                        />
                        <p className="animate-pulse text-sm font-medium text-slate-500">
                            Cargando serie...
                        </p>
                    </div>
                </div>
            )
        }
    }
}
