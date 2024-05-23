

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
    console.log("hola")
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