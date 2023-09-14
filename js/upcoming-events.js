let URLApi = "https://mindhub-xj03.onrender.com/api/amazing"
fetch(URLApi)
  .then((response) => response.json())
  .then(data => {
    let events = data.events
    const upCommingEvents = events.filter(objeto => data.currentDate < objeto.date)

    const catgoriaSinRepeticion = [...new Set(upCommingEvents.map(objeto => objeto.category))]

    imprimirChecksEnHTML(catgoriaSinRepeticion, $contenedorChecks)
    imprimirCardsEnHTML(upCommingEvents, $contenedorCards)

    $contenedorChecks.addEventListener("change", (e) => {

      const returnFnCruzado = fnCruzado(upCommingEvents, $search)
      console.log(returnFnCruzado)
      imprimirCardsEnHTML(returnFnCruzado, $contenedorCards)
    })

    $search.addEventListener("keyup", () => {

      const returnFnCruzado = fnCruzado(upCommingEvents, $search)
      imprimirCardsEnHTML(returnFnCruzado, $contenedorCards)

    })
    function filtroCheck(array) {
      let arrayValues = Array.from(document.querySelectorAll("input[type='checkbox']:checked")).map(check => check.value)
    
      if (arrayValues.length > 0) {
        let objetosFiltradosPorCheck = array.filter(objeto => arrayValues.includes(objeto.category))
    
        return objetosFiltradosPorCheck
      }
      else {
    
        return upCommingEvents
      }
    
    }
    
    function fnCruzado(array, input) {
      const arrayFiltradoPorChecks = filtroCheck(array)
      const arrayFiltradoPorSearchs = filtroSearch(arrayFiltradoPorChecks, input)
      return arrayFiltradoPorSearchs
    
    }

  })
  .catch(error => {
    console.log('error')
  })




const $contenedorCards = document.querySelector('#eventos')
const $contenedorChecks = document.getElementById('checks')

const catgoriaSinRepeticion = [...new Set(data.events.map(objeto => objeto.category))]

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

$contenedorChecks.addEventListener("change", (e) => {

  const returnFnCruzado = fnCruzado(upCommingEvents, $search)
  console.log(returnFnCruzado)
  imprimirCardsEnHTML(returnFnCruzado, $contenedorCards)
})

function crearEstructuraCard(evento) {
  let template = ''

  template += ` <div>
      <div class="card " id="styleCards">
          <img src="${evento.image}" class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">${evento.name}</h5>
              <p class="card-text">${evento.description}</p>
              <a href="./details.html?id=${evento._id}" class="btn btn-primary">More details</a>
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






