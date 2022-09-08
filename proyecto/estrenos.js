function muestraEstrenos() {
  async function obtenerEstrenos() {
    let url =
      "https://api.themoviedb.org/3/movie/now_playing?api_key=cdfe6cf9a0a666f477172936851c22e0&language=en-US&page=1"
    let estrenos
    try {
      let response = await axios.get(url)
      estrenos = response.data.results
      return estrenos
    } catch (e) {
      console.log(e)
      return []
    }
  }

  obtenerEstrenos().then((estrenos) => {
    let arr = estrenos;
    document.querySelector("#resultados").innerHTML = ""
    dibujar(arr)
  })
}
