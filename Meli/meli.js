function buscarEnMercadoLibre(query) {
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=' + query)
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('results');
            const resultList = document.createElement('ul');
            data.results.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = item.title + ' - $' + item.price;
                resultList.appendChild(listItem);
            });
            resultsDiv.appendChild(resultList);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

const consulta = 'pepitos';
buscarEnMercadoLibre(consulta);