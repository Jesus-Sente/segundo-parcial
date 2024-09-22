
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
    const dataMap = {
        departamento: 'nombre',
        municipio: 'capital',
        ext_territorial: 'ext_territorial',
        total_lugares: 'total_lugares',
        poblacion_total: 'pob_total',
        indice_masculinidad: 'indice_masculinidad',
        prom_hijos_mujer: 'prom_hijos_mujer',
        edad_promedio: 'edad_promedio',
        indice_dependencia: 'indice_dependencia',
        anios_prom_estudio: 'anios_prom_estudio',
        alfabetismo: 'alfabetismo',
        viviendas_part: 'viviendas_part',
        total_hogares: 'total_hogares',
        prom_personas_hogar: 'prom_personas_hogar',
        total_jefas_hogar: 'total_jefas_hogar',
        total_sexo_hombre: 'total_sexo_hombre',
        porc_sexo_hombre: 'porc_sexo_hombre',
        total_sexo_mujeres: 'total_sexo_mujeres',
        porc_sexo_mujeres: 'porc_sexo_mujeres',
        total_sector_urbano: 'total_sector_urbano',
        porc_sector_urbano: 'porc_sector_urbano',
        total_sector_rural: 'total_sector_rural',
        porc_sector_rural: 'porc_sector_rural',
        pob_edad_014: 'pob_edad_014',
        porc_edad_014: 'porc_edad_014',
        pob_edad_1564: 'pob_edad_1564',
        porc_edad_1564: 'porc_edad_1564',
        pob_edad_65: 'pob_edad_65',
        porc_edad_65: 'porc_edad_65',
        pob_pueblo_maya: 'pob_pueblo_maya',
        porc_pueblo_maya: 'porc_pueblo_maya',
        pob_pueblo_garifuna: 'pob_pueblo_garifuna',
        porc_pueblo_garifuna: 'porc_pueblo_garifuna',
        pob_pueblo_xinca: 'pob_pueblo_xinca',
        porc_pueblo_xinca: 'porc_pueblo_xinca',
        pob_pueblo_afrodescendiente: 'pob_pueblo_afrodescendiente',
        porc_pueblo_afrodescendiente: 'porc_pueblo_afrodescendiente',
        pob_pueblo_ladino: 'pob_pueblo_ladino',
        porc_pueblo_ladino: 'porc_pueblo_ladino',
        pob_pueblo_extranjero: 'pob_pueblo_extranjero',
        porc_pueblo_extranjero: 'porc_pueblo_extranjero',
      };
      
      // Asignar valores a las variables y a los elementos HTML
      for (let [key, value] of Object.entries(dataMap)) {
        const element = document.getElementById(key);
        if (element) {
          element.textContent = dataJson[value];
        }
      }
      
}


    
