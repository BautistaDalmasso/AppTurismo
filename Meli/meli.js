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

            // Iterate through the first five items
            for (let i = 0; i < 5; i++) {
                const item = data.results[i];
                const listItem = document.createElement('li');
                
                // Create an image element
                const image = document.createElement('img');
                image.src = item.thumbnail; // Assuming 'thumbnail' contains the image URL

                // Create a div to hold the image and details
                const itemDetails = document.createElement('div');

                // Create elements for title and price
                const title = document.createElement('h3');
                title.textContent = item.title;

                const price = document.createElement('p');
                price.textContent = 'Price: $' + item.price;

                // Append elements to the list item
                itemDetails.appendChild(title);
                itemDetails.appendChild(price);
                listItem.appendChild(image);
                listItem.appendChild(itemDetails);

                resultList.appendChild(listItem);
            }

            // Mostrar los resultados en la página
            resultsDiv.innerHTML = ''; // Limpiar resultados anteriores
            resultsDiv.appendChild(resultList);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
