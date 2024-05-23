import { simpleCard } from "../components/simpleCards.js"
import { getMovieFromPersonalId } from "./apiRQ.js"
let container = document.querySelector(".info-data")
export const viewChanger = (texto) => {
    let movie = prompt("Que pelicula quisieras ver para filtrar?")
    switch(texto) {
        case "Actor" :
            secondRQ(movie)
            break
        case "Rango de IMDb" :
            thirdRQ(movie)
            break
        case "Títulos de todas" :
            fourthRQ(movie)
            break
        case "títulos y años de lanzamiento originales" :
            fifthRQ(movie)
            break
        case "identificadores y títulos de todas las películas":
            sixthRQ(movie)
            break
        case "URL completas y los tipos de objetos" :
            seventhRQ(movie)
            break
        case "títulos, años de lanzamiento originales y tipos de objetos":
            eigthRQ(movie)
        default :
            firstRQ(movie)
    }
}
export const firstRQ = async (movie) => {
    container.innerHTML = ""
    let {description} = await getMovieFromPersonalId(movie)
    description.forEach(val => {
        let card = document.createElement("my-card")
        let title = val["#TITLE"]
        let year = val["#YEAR"]
        let h1 = document.createElement("h2")
        let p = document.createElement("p")
        p.textContent = `Año de lanzamiento: ${year}`
        h1.textContent = `Titulo: ${title}`
        card.content.append(h1, p)
        container.appendChild(card)
    })
}
export const secondRQ = async (movie) => {
    container.innerHTML = ""
    let {description} = await getMovieFromPersonalId(movie)
    description.forEach(val => {
        let card = document.createElement("my-card")
        let title = val["#TITLE"]
        let actor = val["#ACTORS"]
        let h1 = document.createElement("h2")
        let p = document.createElement("p")
        p.textContent = `Actores: ${actor}`
        h1.textContent = `Titulo: ${title}`
        card.content.append(h1, p)
        container.appendChild(card)
    })
}
export const thirdRQ = async (movie) => {
    container.innerHTML = ""
    let {description} = await getMovieFromPersonalId(movie)
    description.forEach(val => {
        let card = document.createElement("my-card")
        let title = val["#TITLE"]
        let imbd = val["#RANK"]
        let h1 = document.createElement("h2")
        let p = document.createElement("p")
        p.textContent = `Rango de IMDb: ${imbd}`
        h1.textContent = `Titulo: ${title}`
        card.content.append(h1, p)
        container.appendChild(card)
    })
}
export const fourthRQ = async (movie) => {
    container.innerHTML = ""
    let {description} = await getMovieFromPersonalId(movie)
    let dataUpdate = []
    description.forEach(val => {
        let title = val["#TITLE"]
        dataUpdate.push(title)
    })
    let card = document.createElement("my-card")
    dataUpdate.forEach(val => {
        let h1 = document.createElement("h2")
        h1.textContent = `Titulo: ${val}`
        card.content.append(h1)

    })
    container.appendChild(card)
}
export const fifthRQ = async (movie) => {
    container.innerHTML = ""
    let {description} = await getMovieFromPersonalId(movie)
    description.forEach(val => {
        let card = document.createElement("my-card")
        let title = val["#AKA"]
        let h1 = document.createElement("h2")
        h1.textContent = `Titulo: ${title}`
        card.content.append(h1)
        container.appendChild(card)
    })
}
export const sixthRQ = async (movie) => {
    container.innerHTML = ""
    let {description} = await getMovieFromPersonalId(movie)
    description.forEach(val => {
        let card = document.createElement("my-card")
        let title = val["#TITLE"]
        let imbd = val["#IMDB_ID"]
        let h1 = document.createElement("h2")
        let p = document.createElement("p")
        p.textContent = `Identificador de IMDb: ${imbd}`
        h1.textContent = `Titulo: ${title}`
        card.content.append(h1, p)
        container.appendChild(card)
    })
}
export const seventhRQ = async (movie) => {
    
}
export const eigthRQ = async (movie) => {
    
}

customElements.define("my-card", simpleCard)