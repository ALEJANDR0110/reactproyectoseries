import axios from "axios";
import Global from "../Global"

export default class ServiceSeries {
    getSeries() {
        return new Promise(function(resolve) {
            let url = Global.urlApiSeries;
            let request = "api/Series";

            axios.get(url + request).then(response => {
                console.log("Leyendo series");
                resolve(response.data)
            })
        })
    }

    getSerie(idserie) {
        return new Promise(function(resolve) {
            let url = Global.urlApiSeries;
            let request = "api/Series/" + idserie;

            axios.get(url + request).then(response => {
                console.log("Leyendo datos de serie");
                resolve(response.data)
            })
        })
    }
    
    getPersonajes(idserie) {
        return new Promise(function(resolve) {
            let url = Global.urlApiSeries;
            let request = "api/Series/PersonajesSerie/" + idserie;

            axios.get(url + request).then(response => {
                console.log("Leyendo personajes de serie");
                resolve(response.data)
            })
        })
    }

    getTodosPersonajes() {
        return new Promise(function(resolve) {
            let url = Global.urlApiSeries;
            let request = "api/Personajes";

            axios.get(url + request).then(response => {
                console.log("Leyendo todos los personajes");
                resolve(response.data)
            })
        })
    }

    insertPersonaje(personaje) {
        return new Promise(function(resolve) {
            console.log(personaje)
            let url = Global.urlApiSeries;
            let request = "api/Personajes";
            console.log(url + request)
            axios.post(url + request, personaje).then(response => {
                console.log("insertando personajes");
                resolve(response)
            })
                
        })
    }

    updatePersonaje(idPersonaje, idSerie) {
        return new Promise(function(resolve) {
            let url = Global.urlApiSeries;
            let request = "api/Personajes/" + idPersonaje + "/" + idSerie;
            
            axios.put(url + request).then(response => {
                console.log("modificando personaje");
                resolve(response)
            })
                
        })
    }
}
