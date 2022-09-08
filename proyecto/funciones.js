
// Dibuja lsa cards en el body

function dibujar(arr) {
  document.querySelector("#resultados").innerHTML = ""

  for (let i in arr) {
    let col = document.createElement("div")
    col.classList.add("col", "col-lg-3")

    let card = document.createElement("div")
    card.classList.add("card", "mt-5")

    let img = document.createElement("img");
    img.src = "https://image.tmdb.org/t/p/w500" + arr[i].backdrop_path
    img.classList.add("card-img-top",'img-fluid')
    img.setAttribute("data-bs-toggle","modal")
    img.setAttribute("data-bs-target","#miModal")
    let idmovie = arr[i].id
    img.setAttribute("id",`${idmovie}`)
    
    card.append(img)

    let cardBody = document.createElement("div")
    cardBody.classList.add("card-body")

    let h5 = document.createElement("h5")
    h5.classList.add("card-title")
    h5.innerHTML = arr[i].title
    

    let p = document.createElement("p")
    p.classList.add("h6",'text-muted')
    p.innerHTML = arr[i].release_date

    cardBody.append(h5)
    cardBody.append(p)

    card.append(cardBody)
    col.append(card)

    document.querySelector("#resultados").append(col)
  }
}

// Busca la pelicula en la lista, si la encuentra lanza un alert
function buscar(arr){
    let peliculaBuscar = navtextbuscar.value
    let arrResultante = arr.filter(movie => movie.title === peliculaBuscar)
        if(arrResultante.length){
            alert('Existe')
        }else{
            alert('No existe')
        }
    }

    function obtieneActor(arr) {
       for (let i in arr) {
          
          let idmovie = arr[0].name
          actorestelar.innerHTML = arr[0].name
          console.log(idmovie)
        }
      }