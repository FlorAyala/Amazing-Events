const $contenedorDetails = document.getElementById('mainDetails')


let URLApi = "https://mindhub-xj03.onrender.com/api/amazing"
fetch(URLApi)
  .then((response) => response.json())
  .then(data => {
    
    let datos = data
    let evento = data.events
    

    
    const locationSearch = location.search
    const objURL = new URLSearchParams(locationSearch)
    const valorKey = objURL.get('id')
    const events = evento.find(objeto => objeto._id == valorKey)
    
    imprimirCardDetails($contenedorDetails, events)

  })
  .catch(error => {
    console.log(error)
  })
  


function estructuraDetails(events) {
    let template =""
    template = `<div class="card mb-3 p-3 " style="max-width: 85%; align-items-center">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${events.image}"  class="img-fluid rounded-start max-width: 100% img-thumbnail" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${events.name}</h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Category: ${events.category}</li>
            <li class="list-group-item">Description: ${events.description}</li>
            <li class="list-group-item">Date: ${events.date}</li>
            <li class="list-group-item">Place: ${events.place}</li>
            <li class="list-group-item">Capacity: ${events.capacity}</li>
            <li class="list-group-item">Assistence: ${events.assistance}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>`
    return template
}
function imprimirCardDetails(elemtoHTML, events){
    elemtoHTML.innerHTML = estructuraDetails(events)

}