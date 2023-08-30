console.log(data);
// console.log(data);

let  template  = ''
let pastEvents = []
const currentDate = data.currentDate


const $div = document.querySelector('#eventos')

// console.log($div);


function filtroFecha(date){
    for(let evento of data.events){
        if (date <= evento.date){
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
                <h5 class="${evento.name}">${evento.category}</h5>
                <p class="card1-text">${evento.description}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        </div>`
    

}

console.log( template )
$div.innerHTML =  template