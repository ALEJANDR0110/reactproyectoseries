import React, { Component } from 'react'
import ServiceSeries from '../services/ServiceSeries'
import { Navigate } from 'react-router-dom';

export default class NuevoPersonaje extends Component {
    service = new ServiceSeries();

    cajaNombre = React.createRef();
    cajaImg = React.createRef();
    selectSerie = React.createRef();

    state = {
        series: [],
        serCargadas: false,
        status: false
    }

    getSeries = () => {
        this.service.getSeries().then(result => {
            this.setState({
                series: result,
                serCargadas: true
            })
        })
    }

    insertPersonaje = (event) => {
        event.preventDefault();
        let nombre = "" + this.cajaNombre.current.value
        let imagen = "" + this.cajaImg.current.value

        let personaje = {
            idPersonaje: 12,
            nombre: nombre.toString(),
            imagen: imagen.toString(),
            idSerie: parseInt(this.selectSerie.current.value)
        }
        
        this.service.insertPersonaje(personaje).then(result => {
            this.setState({
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.getSeries();
    }

    render() {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-100 to-indigo-100 px-4 py-12">
                <div className="mx-auto max-w-lg rounded-2xl bg-white p-8 shadow-xl sm:p-10">
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-extrabold tracking-tight text-slate-800">
                            Crear Personaje
                        </h1>
                        <p className="mt-2 text-sm text-slate-500">
                            Añade un nuevo personaje a tu colección
                        </p>
                        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-indigo-600"></div>
                    </div>

                    <form className="space-y-6">
                        <div>
                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                Nombre
                            </label>
                            <input
                                type="text"
                                ref={this.cajaNombre}
                                placeholder="Introduce el nombre"
                                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                Imagen
                            </label>
                            <input
                                type="text"
                                ref={this.cajaImg}
                                placeholder="Introduce la URL de la imagen"
                                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                            />
                        </div>

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

                        <button
                            onClick={this.insertPersonaje}
                            className="w-full rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-md transition duration-200 hover:bg-indigo-700 hover:shadow-lg active:scale-[0.98]"
                        >
                            Crear personaje
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
