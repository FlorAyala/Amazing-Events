let  template  = ""
let pastEvents = []
const currentDate = data.currentDate


const $div = document.querySelector('#eventos')




function filtroFecha(date){
    for(let evento of data.events){
        if (date >= evento.date){
            pastEvents.push(evento)
        }
    }

}
filtroFecha(currentDate)
console.log(pastEvents)

for ( let evento of pastEvents){
   
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

}

console.log( template )
$div.innerHTML =  template