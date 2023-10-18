function buscarEnMercadoLibre() {
    // Obtener el valor del campo de consulta
    const query = document.getElementById('query').value;

    // Realizar la solicitud a la API de MercadoLibre con la consulta
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=' + query)
        .then(response => response.json())
        .then(data => {
            // Manipular los datos de la respuesta aquí
            const resultsDiv = document.getElementById('results');
            // Crear un listado de resultados
            const resultList = document.createElement('ul');
            data.results.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = item.title + ' - $' + item.price;
                resultList.appendChild(listItem);
            });
            // Mostrar los resultados en la página
            resultsDiv.innerHTML = ''; // Limpiar resultados anteriores
            resultsDiv.appendChild(resultList);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}