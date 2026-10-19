import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import ServiceSeries from '../services/ServiceSeries'
import cargando from '../assets/images/cargando.gif'

export default class MenuComponent extends Component {
    service = new ServiceSeries();

    state = {
        menuAbierto: false,
        dropdownAbierto: false,
        series: [],
        serCargadas: false
    }

    getSeries = () => {
        this.service.getSeries().then(result => {
            this.setState({
                series: result,
                serCargadas: true
            })
        })
    }

    componentDidMount = () => {
        this.getSeries();
    }

    render() {
        if(this.state.serCargadas == true) {
            return (
                <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md">
                    <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-5 py-4">

                        {/* Logo */}
                        <NavLink
                            to="/"
                            className="flex shrink-0 items-center gap-3"
                        >
                            <img
                                src="https://flowbite.com/docs/images/logo.svg"
                                className="h-9 w-9"
                                alt="Flowbite Logo"
                            />
                            <span className="text-2xl font-bold tracking-tight text-gray-900">
                                Flowbite
                            </span>
                        </NavLink>

                        {/* Botón menú hamburguesa */}
                        <button
                            type="button"
                            onClick={() => this.setState({
                                menuAbierto: !this.state.menuAbierto
                            })}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 transition hover:bg-gray-100 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 md:hidden"
                            aria-controls="navbar-dropdown"
                            aria-expanded={this.state.menuAbierto}
                        >
                            <span className="sr-only">Abrir menú principal</span>

                            <svg
                                className="h-6 w-6"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                    d="M5 7h14M5 12h14M5 17h14"
                                />
                            </svg>
                        </button>

                        {/* Navegación */}
                        <div
                            id="navbar-dropdown"
                            className={`${
                                this.state.menuAbierto ? 'block' : 'hidden'
                            } mt-4 w-full md:mt-0 md:block md:w-auto`}
                        >
                            <ul className="flex flex-col gap-2 rounded-xl border border-gray-100 bg-white p-3 font-medium md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0">

                                {/* Home */}
                                <li>
                                    <NavLink
                                        to="/"
                                        end
                                        className={({ isActive }) =>
                                            `block rounded-lg px-4 py-2.5 transition ${
                                                isActive
                                                    ? 'bg-blue-50 text-blue-700 md:bg-transparent'
                                                    : 'text-gray-600 hover:bg-gray-50 hover:text-blue-700'
                                            } md:px-3 md:py-2`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>

                                {/* Crear coche */}
                                <li>
                                    <NavLink
                                        to="/create"
                                        className={({ isActive }) =>
                                            `block rounded-lg px-4 py-2.5 transition ${
                                                isActive
                                                    ? 'bg-blue-50 text-blue-700 md:bg-transparent'
                                                    : 'text-gray-600 hover:bg-gray-50 hover:text-blue-700'
                                            } md:px-3 md:py-2`
                                        }
                                    >
                                        Nuevo Personaje
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/modify"
                                        className={({ isActive }) =>
                                            `block rounded-lg px-4 py-2.5 transition ${
                                                isActive
                                                    ? 'bg-blue-50 text-blue-700 md:bg-transparent'
                                                    : 'text-gray-600 hover:bg-gray-50 hover:text-blue-700'
                                            } md:px-3 md:py-2`
                                        }
                                    >
                                        Modificar Personaje
                                    </NavLink>
                                </li>

                                {/* Dropdown */}
                                <li className="relative">
                                    <button
                                        type="button"
                                        id="dropdownNvbarButton"
                                        onClick={() => this.setState({
                                            dropdownAbierto: !this.state.dropdownAbierto
                                        })}
                                        className="flex w-full items-center justify-between gap-2 rounded-lg px-4 py-2.5 text-gray-600 transition hover:bg-gray-50 hover:text-blue-700 md:w-auto md:px-3 md:py-2"
                                        aria-controls="dropdownNavbar"
                                        aria-expanded={this.state.dropdownAbierto}
                                    >
                                        Series

                                        <svg
                                            className={`h-4 w-4 transition-transform ${
                                                this.state.dropdownAbierto
                                                    ? 'rotate-180'
                                                    : ''
                                            }`}
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="m19 9-7 7-7-7"
                                            />
                                        </svg>
                                    </button>

                                    {/* Opciones del dropdown */}
                                    {this.state.dropdownAbierto && (
                                        <div
                                            id="dropdownNavbar"
                                            className="relative mt-2 w-full rounded-xl border border-gray-100 bg-white p-2 shadow-lg md:absolute md:left-0 md:top-full md:mt-3 md:w-48"
                                        >
                                            <ul
                                                className="space-y-1 text-sm"
                                                aria-labelledby="dropdownNvbarButton"
                                            >
                                                {
                                                    this.state.series.map((serie, index) => {
                                                        return (
                                                            <li key={index}>
                                                                <NavLink
                                                                    to={"/detallesSerie/" + serie.idSerie}
                                                                    className="block rounded-lg px-3 py-2.5 text-gray-600 transition hover:bg-gray-50 hover:text-blue-700"
                                                                >
                                                                    {serie.nombre}
                                                                </NavLink>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    )}
                                </li>

                                
                            </ul>
                        </div>
                    </div>
                </nav>
            )
        }else {
            return(
                <img src={cargando} alt="cargando" />
            )
        }
    }
}
