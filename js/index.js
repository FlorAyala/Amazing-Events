console.log(data);
const $div = document.querySelector('#eventos')

console.log($div); 
 
let  template  = ''
for ( let evento of data.events){
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