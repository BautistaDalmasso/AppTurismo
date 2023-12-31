function buscarEnMercadoLibre() {
    // Obtener el valor del campo de consulta
    const query = document.getElementById('nombre').value;

    // Realizar la solicitud a la API de MercadoLibre con la consulta
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=' + query)
        .then(response => response.json())
        .then(data => {
            // Manipular los datos de la respuesta aquí
            const resultsDiv = document.getElementById('results');
            // Crear un listado de resultados
            const resultList = document.createElement('ul');

            for (let i = 0; i < 5; i++) {
                const item = data.results[i];
                const listItem = document.createElement('li');
                
                const image = document.createElement('img');
                image.src = item.thumbnail;

                const itemDetails = document.createElement('div');

                const title = document.createElement('h3');
                title.textContent = item.title;

                const price = document.createElement('p');
                price.textContent = 'Price: $' + item.price;

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
document.addEventListener('DOMContentLoaded', () => {
    const avisoForm = document.getElementById('aviso-form');

    avisoForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // evitar que el formulario se envíe de forma predeterminada

        const formData = new FormData(avisoForm);

        try {
            const response = await fetch('/crear-aviso', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                alert('Aviso creado exitosamente.');
                // redirigir al comerciante a otra pag después de crear el aviso.
            } else {
                alert('Error al crear el aviso. Por favor, intenta nuevamente.');
            }
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
            alert('Error al crear el aviso. Por favor, intenta nuevamente.');
        }
    });
   

});