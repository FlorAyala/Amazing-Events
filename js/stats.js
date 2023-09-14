let URLApi = "https://mindhub-xj03.onrender.com/api/amazing";

const $contenedorTabla1 = document.getElementById("tabla1");
const $contenedorTabla2 = document.getElementById("tabla2");
const $contenedorTabla3 = document.getElementById("tabla3");


fetch(URLApi)
  .then((response) => response.json())
  .then((data) => {
    let datos = data;
    let events = data.events;

    const pastEvents = events.filter((objeto) => datos.currentDate > objeto.date);
    const upcomingEvents = events.filter((objeto) => datos.currentDate < objeto.date);
    const catgoriaSinRepeticion = [...new Set(pastEvents.map(objeto => objeto.category))]

    //  estructura Tabla 1
    let mayor = mayorAsistencia(events);
    let menor = menorAsistencia(events);
    let capacidad = capacidadTabla1(events);

    estructuraTabla1(mayor, menor, capacidad, $contenedorTabla1);



    //  estructura Tabla 3
    let arrysCategorias = catgoriaSinRepeticion.map(categoria => pastEvents.filter(event => event.category == categoria))

    let arrysCategoriasUpcomming = catgoriaSinRepeticion.map(categoria => upcomingEvents.filter(event => event.category == categoria)).filter((elemento) => elemento.length)



    function recorrerCategoria() {

      let resultadoCategoriasReducida;
      let aux = []
      for (const array of arrysCategorias) {
        let categoria = ''
        let recaudacion = 0
        let porcentaje = 0
        resultadoCategoriasReducida = array.reduce((acumulador, elementoActual) => {
          categoria = elementoActual.category
          recaudacion += (elementoActual.price * elementoActual.assistance)
          porcentaje += ((elementoActual.assistance * 100) / elementoActual.capacity)

          acumulador = {
            cat: categoria, rec: recaudacion, portj: porcentaje / array.length
          }
          return acumulador
        }, {})

        aux.push(resultadoCategoriasReducida)
      }
      return aux
    }
    let resultadoTablaPastEvent = recorrerCategoria()
    estructuraTabla(resultadoTablaPastEvent, $contenedorTabla3)



    // tabla 2

    function recorrerCategoria2() {

      let resultadoCategoriasReducida;
      let aux = []
      for (const array of arrysCategoriasUpcomming) {
        let categoria = ''
        let recaudacion = 0
        let porcentaje = 0
        resultadoCategoriasReducida = array.reduce((acumulador, elementoActual) => {
          categoria = elementoActual.category
          recaudacion += (elementoActual.price * elementoActual.estimate)
          porcentaje += ((elementoActual.estimate * 100) / elementoActual.capacity)

          acumulador = {
            cat: categoria, rec: recaudacion, portj: porcentaje / array.length
          }
          return acumulador
        }, {})

        aux.push(resultadoCategoriasReducida)
      }
      return aux
    }
    let resultadoTablaUpcomming = recorrerCategoria2()
    estructuraTabla(resultadoTablaUpcomming, $contenedorTabla2)


  })
  .catch((error) => {
    console.log(error);
  });

//  primer tabla

function mayorAsistencia(array) {
  let numeroMayor = array.sort((a, b) => a.assistance - b.assistance)[0];
  return numeroMayor;
}

function menorAsistencia(array) {
  let numeroMenor = array.sort((a, b) => b.assistance - a.assistance)[0];
  return numeroMenor;
}
function capacidadTabla1(array) {
  let capacidad = array.sort((a, b) => b.capacity - a.capacity)[0];

  return capacidad;
}

function estructuraTabla1(numeroMayor, numeroMenor, capacidad, elementoHTML) {
  let template = `
  <tr>
  <td>${numeroMayor.name} ${((numeroMayor.assistance * 100) / numeroMayor.capacity).toFixed(2)}%</td>
  <td>${numeroMenor.name} ${((numeroMenor.assistance * 100) / numeroMenor.capacity).toFixed(2)}%</td>
  <td>${capacidad.name} ${capacidad.capacity} $</td>
</tr>`;
  elementoHTML.innerHTML = template;
}



// tabla para past y upcommin
function estructuraTabla(array, elemento) {
  let estructura = ''
  array.forEach(categoria => {
    let template = `
    <tr>
    <td>${categoria.cat}</td>
    <td>${categoria.rec}</td>
    <td>${categoria.portj}%</td>
  </tr>
    `;
    estructura += template
  });
  elemento.innerHTML = estructura
}









