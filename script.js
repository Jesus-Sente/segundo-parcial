fetch('https://censopoblacion.azurewebsites.net/API/indicadores/2/999')
        .then(response => response.json())  // Usamos .text() porque la API devuelve un string
        .then(dataString => {
            // Convertimos el string en un objeto JSON
            const dataJson = JSON.parse(dataString);
            console.log(dataJson);

            // Mostramos los datos que necesitamos en el contenedor
            mostrarDatosJson(dataJson);
            
        })
        .catch(error => {
            console.error('Error al obtener los datos del censo:', error);
        });

function loadCensusData() {
    
}

function mostrarDatosJson(dataJson) {
    // Seleccionamos el contenedor donde se añadirán los elementos <p>
    const contenedor = document.getElementById('data-container');
    contenedor.innerHTML = ''; // Limpiar el contenedor antes de añadir nuevos elementos

    // Iteramos sobre las propiedades del objeto JSON
    for (const key in dataJson) {
        if (dataJson.hasOwnProperty(key)) {
            // Creamos un nuevo elemento <p>
            const p = document.createElement('p');
            // Asignamos el texto al elemento <p>
            p.textContent = `${key}: ${dataJson[key]}`;
            // Añadimos el <p> al contenedor
            contenedor.appendChild(p);
        }
    }
}


    
