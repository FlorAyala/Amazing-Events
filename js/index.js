console.log(data)
const $div = document.querySelector('#eventos')

 
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



//CHECKBOX  

let template2 = ''
for(let category of data.events) {
    template2 += `  <div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
    <label class="form-check-label" for="inlineCheckbox1">${category.category}</label>
</div>
    `
}
console.log(template2)
const $checbox = document.getElementById('checkbox')
$checbox.innerHTML = template2;
