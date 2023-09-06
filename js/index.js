const $contenedorChecks = document.getElementById('checks')
const $contenedorCards = document.getElementById('eventos')

const catgoriaSinRepeticion = [...new Set(data.events.map(objeto => objeto.category)) ]

function estructuraChecks(categoria){
  let template =''
  template =`
  <div class="form-check form-check-inline">
  <label class="form-check-label" for="inlineCheckbox1">
  <input class="form-check-input" type="checkbox" id="${categoria}" value="${categoria}">${categoria}</label>
</div>
  `
  return template
}


function imprimirChecksEnHTML (array, elementoHTML){
  let estructura = ""
  array.forEach( categoria => {
       estructura += estructuraChecks(categoria)
  } )
  elementoHTML.innerHTML = estructura
}
imprimirChecksEnHTML(catgoriaSinRepeticion, $contenedorChecks)

$contenedorChecks.addEventListener("change", (e) => {
  console.log('funciona')
  const returnFnCruzado = fnCruzado(data.events, $search)
  console.log(returnFnCruzado )
  imprimirCardsEnHTML(returnFnCruzado, $contenedorCards)
})

function crearEstructuraCard (evento){
  let  template  = ''
  
      template  += ` <div>
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

function imprimirCardsEnHTML (arrayEvents, elementoHTML){
  let estructura = ""
  arrayEvents.forEach( objeto => {
       estructura += crearEstructuraCard(objeto)
  } )
  elementoHTML.innerHTML = estructura
}
imprimirCardsEnHTML(data.events, $contenedorCards)


const $search = document.querySelector('input[type="search"]')
$search.addEventListener("keyup", () =>{
  
 const returnFnCruzado = fnCruzado(data.events, $search)
  imprimirCardsEnHTML(returnFnCruzado, $contenedorCards)

})

function filtroSearch(array, input){
  let filtradosSearch = array.filter(objeto => objeto.name.includes(input.value))
  console.log(filtradosSearch)
  return filtradosSearch
}


function filtroCheck(array){
  let arrayValues = Array.from(document.querySelectorAll("input[type='checkbox']:checked")).map( check => check.value)
  console.log(arrayValues)
  if(arrayValues.length > 0){
    let objetosFiltradosPorCheck = array.filter(objeto => arrayValues.includes(objeto.category))
    console.log(objetosFiltradosPorCheck)
    return objetosFiltradosPorCheck
  }
  else{
    console.log(data.events)
    return data.events
  }

}

function fnCruzado(array, input){
  const  arrayFiltradoPorChecks = filtroCheck(array)
  const arrayFiltradoPorSearchs = filtroSearch(arrayFiltradoPorChecks, input)
  return arrayFiltradoPorSearchs
 
}


