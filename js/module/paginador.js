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
        let keyes = Object.keys(val)
        let title = val[keyes[0]]
        let year = val[keyes[1]]
        let h1 = document.createElement("h2")
        let p = document.createElement("p")
        p.textContent = year
        h1.textContent = title
        card.content.append(h1, p)
        container.appendChild(card)
    })
}
export const secondRQ = async (movie) => {
    
}
export const thirdRQ = async (movie) => {
    
}
export const fourthRQ = async (movie) => {
    
}
export const fifthRQ = async (movie) => {
    
}
export const sixthRQ = async (movie) => {
    
}
export const seventhRQ = async (movie) => {
    
}
export const eigthRQ = async (movie) => {
    
}

customElements.define("my-card", simpleCard)