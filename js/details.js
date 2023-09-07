//  console.log(location)
const locationSearch = location.search
console.log(locationSearch)

const objURL = new URLSearchParams(locationSearch)
console.log(objURL)


const valorKey = objURL.get('id')
console.log(valorKey)

const events = data.events.find(objeto => objeto._id === valorKey)
console.log(events)


const $contenedorDetails = document.getElementById('mainDetails')
console.log($contenedorDetails)

function estructuraDetails(evento) {
    let template = ''
    template = `<div class="card mb-3 p-3 " style="max-width: 85%; align-items-center">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${evento.image}"  class="img-fluid rounded-start max-width: 100% img-thumbnail" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${evento.name}</h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Category: ${evento.category}</li>
            <li class="list-group-item">Description: ${evento.description}</li>
            <li class="list-group-item">Date: ${evento.date}</li>
            <li class="list-group-item">Place: ${evento.place}</li>
            <li class="list-group-item">Capacity: ${evento.capacity}</li>
            <li class="list-group-item">Assistence: ${evento.assistance}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>`
    return template
}
function imprimirCardDetails(elemtoHTML, evento){
    elemtoHTML.innerHTML = estructuraDetails(evento)

}
imprimirCardDetails($contenedorDetails, events)