import React, { Component } from 'react'
import portada from '../assets/images/seriestv.e0b0894681a8624917c1.jpg'

export default class HomeComponent extends Component {
    render() {
        return (
            <div className="w-full overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
                <img
                    src={portada}
                    alt="p"
                    className="block h-auto w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                />
            </div>
        )
    }
}
