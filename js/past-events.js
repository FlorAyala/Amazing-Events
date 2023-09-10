let URLApi = "https://mindhub-xj03.onrender.com/api/amazing"
fetch(URLApi)
  .then((response) => response.json())
  .then(data => {
    let events = data.events


    let pastEvents = events.filter(objeto => data.currentDate > objeto.date)

    const catgoriaSinRepeticion = [...new Set(pastEvents.map(objeto => objeto.category))]

    imprimirChecksEnHTML(catgoriaSinRepeticion, $contenedorChecks)
    imprimirCardsEnHTML(pastEvents, $contenedorCards)

    $search.addEventListener("keyup", () => {

      const returnFnCruzado = fnCruzado(pastEvents, $search)
      imprimirCardsEnHTML(returnFnCruzado, $contenedorCards)

    })

    $contenedorChecks.addEventListener("change", (e) => {

      const returnFnCruzado = fnCruzado(pastEvents, $search)
      console.log(returnFnCruzado)
      imprimirCardsEnHTML(returnFnCruzado, $contenedorCards)
    })




  }
  )
  .catch(error => {
    console.log('error')
  })


let template = ""


const $contenedorCards = document.querySelector('#eventos')
const $contenedorChecks = document.getElementById('checks')



function estructuraChecks(categoria) {
  let template = ''
  template = `
  <div class="form-check form-check-inline">
  <label class="form-check-label" for="inlineCheckbox1">
  <input class="form-check-input" type="checkbox" id="${categoria}" value="${categoria}">${categoria}</label>
</div>
  `
  return template
}


function imprimirChecksEnHTML(array, elementoHTML) {
  let estructura = ""
  array.forEach(categoria => {
    estructura += estructuraChecks(categoria)
  })
  elementoHTML.innerHTML = estructura
}


function crearEstructuraCard(evento) {
  let template = ''

  template += ` <div>
      <div class="card " id="styleCards">
          <img src="${evento.image}" class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">${evento.name}</h5>
              <p class="card-text">${evento.description}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
      </div>
      </div>`


  return template
}

function imprimirCardsEnHTML(arrayEvents, elementoHTML) {
  let estructura = ""
  arrayEvents.forEach(objeto => {
    estructura += crearEstructuraCard(objeto)
  })
  elementoHTML.innerHTML = estructura
}


const $search = document.querySelector('input[type="search"]')


function filtroSearch(array, input) {
  let filtradosSearch = array.filter(objeto => objeto.name.includes(input.value))

  return filtradosSearch
}


function filtroCheck(array) {
  let arrayValues = Array.from(document.querySelectorAll("input[type='checkbox']:checked")).map(check => check.value)

  if (arrayValues.length > 0) {
    let objetosFiltradosPorCheck = array.filter(objeto => arrayValues.includes(objeto.category))

    return objetosFiltradosPorCheck
  }
  else {

    return pastEvents
  }

}

function fnCruzado(array, input) {
  const arrayFiltradoPorChecks = filtroCheck(array)
  const arrayFiltradoPorSearchs = filtroSearch(arrayFiltradoPorChecks, input)
  return arrayFiltradoPorSearchs

}



