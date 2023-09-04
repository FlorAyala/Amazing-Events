const $div = document.querySelector('#eventos')

function mostrarTarjetas(arrayEvents){

    let  template  = ''
    for ( let evento of arrayEvents){
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
}
mostrarTarjetas(data.events)




function imprimir (){
    let checks = document.getElementById("checks")
    let checkbox = data.events.map(e => e.category)
    let noRepetidas = new Set(checkbox);
    let category = [...noRepetidas]
  let imprimirCheckbox = "";
  category.forEach(category =>{
      imprimirCheckbox +=  `<div class="form-check form-check-inline  flex-lg-row flex-md flex-sm">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="${category}">
      <label class="form-check-label" for="inlineCheckbox1">${category}</label>
    </div>`
    
    checks.innerHTML = imprimirCheckbox;
  })
  }
  imprimir()
  
  let checkBoxSelector = [];
  let text = ""
  let checkbox = document.querySelectorAll('input[type=checkbox]');
  checkbox.forEach(check =>check.addEventListener("click", (e)=>{
    let checked = e.target.checked
    if (checked){
      checkBoxSelector.push(e.target.value)
      filtrador()
    //Aca va una funcion que filtra las posibilidades de busqueda 
    } else {
      checkBoxSelector = checkBoxSelector.filter(uncheck => uncheck !== e.target.value) 
    }filtrador()
   
  }))
  
  let buscador = document.querySelector("#buscador")
  buscador.addEventListener("keyup", (e) => {
     text = e.target.value
    filtrador()
    console.log(text)
  })
  
  function filtrador(){
    let datos = [];
    if(checkBoxSelector.length > 0 && text !== "") {
      checkBoxSelector.map(selected => (
        datos.push(...data.events.filter(e => events.name.toLowerCase().includes
         (text.trim().toLowerCase())&& e.category == selected )))
      )
    } 
     else if (checkBoxSelector.length >0 && text ===""){
      checkBoxSelector.map (selected => {
        datos.push(...data.events.filter(e => e.category == selected ))
     
      })
    } else if (checkBoxSelector.length == 0 && text !==""){
      datos.push(...data.events.filter(e => e.name.toLowerCase().includes
      (text.trim().toLowerCase())))
    }
  else {
    datos.push(...data.events)
  } 
  console.log(checkBoxSelector);
  mostrarTarjetas(datos);
  }
  filtrador()







