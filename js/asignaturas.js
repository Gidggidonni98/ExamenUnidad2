async function fetchAsignaturas(){
    let response = await fetch('../data/asignaturas.json');
    return await response.json();
}


fetchAsignaturas().then(data => {
    console.log(data)


    Object.entries(data).forEach(([key, value]) => {

        const tabla = document.getElementById('tbod');
        tabla.innerHTML += `
        <tbody>
              <tr>
                <td>${value.id}</td>
                <td>${value.nombre}</td>
                <td>${value.codigo}</td>
                <td>${value.creditos}</td>
                <td>${value.seriacion}</td>
                <td>${value.cuatrimestre}</td>
                <td>${value.carrera.nombre}</td>
              </tr>
        </tbody>` 
    })





    
});




























// const url = 'https://ipwho.is/187.214.41.60';

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     const cardBody = document.getElementById('ip-info');
//     console.log(data);
//     cardBody.innerHTML = `

//         <div class="card" style="width: 18rem;">
//         <img src="${data.flag.img}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">Ip info</h5>
//           <p class="card-text"><strong>IP:</strong> ${data.ip}</p>
//           <p class="card-text"><strong>Tipo:</strong> ${data.type}</p>
//           <p class="card-text"><strong>Continente:</strong> ${data.continent}</p>
//           <p class="card-text"><strong>Pais:</strong> ${data.country}</p>
//           <p class="card-text"><strong>Region:</strong> ${data.region}</p>
//           <p class="card-text"><strong>Ciudad:</strong> ${data.city}</p>
//           <p class="card-text"><strong>Fronteras:</strong> ${data.borders}</p>
//           <p class="card-text"><strong>Timezone:</strong> ${data.timezone.id}</p>
//         </div>
//       </div>
//         `;
//   })
//   .catch(error => {
//     console.log(error);
//   });











// async function fetchEstudiantes() {
//     const response = await fetch('../data/estudiantes.json', {
//       headers: { Accept: 'application/json' },
//     });
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return await response.json();
//   }
//   fetchEstudiantes().then(data => {
//     document.write(`<br>`)
//     document.write(`<table>`)
//     document.write(`<tr>`)
//     document.write(`<th>  NOMBRE </th>
//           <th>  PESO </th>
//           <th>  COLOR CABELLO </th>
//           <th>  OJOS </th>
//           <th>  FECHA NACIMIENTO </th>
//           <th>  GENERO </th>`);
//     document.write(`</tr>`)
//     Object.entries(data.results).forEach(([key, value]) => {
//       document.write(`<tr>`)
//       document.write(`<td>  ${value.name} </td>
//           <td>  ${value.mass} </td>
//           <td>  ${value.hair_color} </td>
//           <td>  ${value.eye_color} </td>
//           <td>  ${value.birth_year} </td>
//           <td>  ${value.gender} </td>`);
//       document.write(`</tr>`)
//     });
//     document.write(`</table>`)
//   });
