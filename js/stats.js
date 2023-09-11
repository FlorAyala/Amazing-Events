let URLApi = "https://mindhub-xj03.onrender.com/api/amazing"
fetch(URLApi)
  .then((response) => response.json())
  .then(data => {
    let events = data.events

    imprimirTablaHtml($contenedorTabla, events)

    const pastEvents = events.filter(objeto => data.currentDate > objeto.date)
    const UpcomingEvents = events.filter(objeto => data.currentDate < objeto.date)

 
    
  })
  .catch(error => {
    console.log('error')
  })


  const $contenedorTabla = document.getElementById('tabla')



function estructuraTabla(evento){
    templeate =''
    templeate += `
    <table class="table ">
        <thead>
          <tr>
            <th>Events Statistics</th>
            <th>   </th>
            <th>    </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Events with highest % of assistance</td>
            <td>Events with lowest % of assistance</td>
            <td>Events with lager capacity</td>
          </tr>
          <tr>
            <td>   </td>
            <td>   </td>
            <td>   </td>
          
          </tr>
        
        </tbody>
      </table>

      <table class="table">
        <thead>
          <tr>
            <th>Upcoming events statistics by category</th>
            <th>   </th>
            <th>    </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Categories</td>
            <td>Revenues</td>
            <td>Percentage of assitance</td>
          </tr>
          <tr>
            <td>   </td>
            <td>   </td>
            <td>   </td>
          </tr>
          <tr>
            <td>   </td>
            <td>   </td>
            <td>   </td>
          </tr>
        </tbody>
      </table>


      <table class="table ">
        <thead>
          <tr>
            <th>Past events statistics by category</th>
            <th>   </th>
            <th>    </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Categories</td>
            <td>Revenues</td>
            <td>Percentage of assitance</td>
          </tr>
          <tr>
            <td>   </td>
            <td>    </td>
            <td>    </td>
          </tr>
          <tr>
            <td>   </td>
            <td>   </td>
            <td>   </td>
          </tr>
        </tbody>
      </table>
    `
    return templeate
}
function imprimirTablaHtml(elementoHTML, evento){
    elementoHTML.innerHTML = estructuraTabla(evento)

}


function mayorAsistencia(){
    let filtro= pastEvents.filter()
    // .map
    


}
function porcenjate(){
        // ASISTENCIA/CAPACIDAD*100

}
