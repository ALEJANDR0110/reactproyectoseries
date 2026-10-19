import React, { Component } from 'react'
import ServiceSeries from '../services/ServiceSeries'
import SerieCambiada from './SerieCambiada';

export default class ModificarPersonaje extends Component {
    service = new ServiceSeries();

    selectPersonaje = React.createRef()
    selectSerie = React.createRef();

    state = {
        series: [],
        personajes: [],
        serElegida: null,
        perElegido: null,
        status: false
    }

    loadSeries = () => {
        this.service.getSeries().then(result => {
            this.setState({
                series: result,
            })
        })
    }

    loadPersonajes = () => {
        this.service.getTodosPersonajes().then(result => {
            this.setState({
                personajes: result,
            })
        })
    }

    modificarPersonaje = (event) => {
        event.preventDefault();

        let idPersonaje = this.selectPersonaje.current.value
        let idSerie = this.selectSerie.current.value

        this.service.updatePersonaje(idPersonaje, idSerie).then( result => {
            this.setState({
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.loadPersonajes();
        this.loadSeries();
    }

    render() {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-100 to-indigo-100 px-4 py-12">
                <div className="mx-auto max-w-lg rounded-2xl bg-white p-8 shadow-xl sm:p-10">
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-extrabold tracking-tight text-slate-800">
                            Modificar Personaje
                        </h1>
                        <p className="mt-2 text-sm text-slate-500">
                            Selecciona una serie y el personaje que deseas modificar
                        </p>
                        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-indigo-600"></div>
                    </div>

                    <form className="space-y-6">
                        <div>
                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                Serie
                            </label>
                            <select
                                ref={this.selectSerie}
                                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                            >
                                {
                                    this.state.series.map((serie, index) => {
                                        return (
                                            <option key={index} value={serie.idSerie}>
                                                {serie.nombre}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                Personaje
                            </label>
                            <select
                                ref={this.selectPersonaje}
                                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                            >
                                {
                                    this.state.personajes.map((personaje, index) => {
                                        return (
                                            <option key={index} value={personaje.idPersonaje}>
                                                {personaje.nombre}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                        <button
                            onClick={this.modificarPersonaje}
                            className="w-full rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-md transition duration-200 hover:bg-indigo-700 hover:shadow-lg active:scale-[0.98]"
                        >
                            Modificar personaje
                        </button>
                    </form>

                    {
                        this.state.serElegida &&
                        <div className="mt-8 rounded-xl border border-indigo-100 bg-indigo-50 p-4">
                            <SerieCambiada idserie={this.state.serElegida} />
                        </div>
                    }
                </div>
            </div>
        )
    }
}
