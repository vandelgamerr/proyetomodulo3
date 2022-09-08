function obtenerPeliculasFiltradas(){
async function obtenerPeliculas() {
    let url =
      "https://api.themoviedb.org/3/movie/popular?api_key=cdfe6cf9a0a666f477172936851c22e0&language=en-US&page=1"
      let peliculas = []
    try {
      let response = await axios.get(url)
      peliculas = response.data.results
      return peliculas
    } catch (e) {
      console.log(e)
      return []
    }
  }

 
  
  obtenerPeliculas().then((peliculas) => {
    let arrGenero = peliculas.filter(genero => genero.genre_ids[0] === 28)
        document.querySelector("#resultados").innerHTML="";

        document.querySelector("#resultados").innerHTML = ""
        dibujar(arrGenero)
  })
}