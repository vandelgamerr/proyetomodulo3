// Obtiene cualquier elemento que se presionen dentro de resultados 
document.querySelector("#resultados").addEventListener('click', (evt) => {
    let trigger = evt.target
    let id
    id = trigger.id
    obtenerCast(trigger)
  })
   
    
  function obtenerCast(trigger){
    let t = trigger.id
    console.log(t)
   if(t>0){
  
      async function obtenerActores() {
      let mid = 629176
      let url =
      //"https://api.themoviedb.org/3/movie/616037/credits?api_key=cdfe6cf9a0a666f477172936851c22e0"
       `https://api.themoviedb.org/3/movie/${t}/credits?api_key=cdfe6cf9a0a666f477172936851c22e0`
  
      let actores
      try {
        let response = await axios.get(url)
        actores = response.data.cast
        return actores
      } catch (e) {
        console.log(e)
        return []
      }
    }
  
    obtenerActores().then((actores) => {
      let arr = actores
      obtieneActor(arr)
    })
  }
  }

