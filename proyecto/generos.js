function obtenerGeneros(){
async function obtenerGeneros() {
    let url =
      "https://api.themoviedb.org/3/genre/movie/list?api_key=cdfe6cf9a0a666f477172936851c22e0&language=en-US";
    let generos = []
    try {
      let response = await axios.get(url)
      generos = response.data.genres
      return generos
    } catch (e) {
      console.log(e)
      return []
    }
  }
  
  obtenerGeneros().then((generos) => {
    for (let i in generos) {
      let text1 = document.createTextNode(generos[i].name)
      let li = document.createElement("li")
      let a = document.createElement("a")
      a.setAttribute("class", "dropdown-item")
      a.setAttribute("href", "#")
      a.appendChild(text1)
      li.appendChild(a)
      document.getElementById("listacategorias").appendChild(li)
    }
  })
}

obtenerGeneros()