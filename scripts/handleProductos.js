function agregarProductos() {
    avisos.forEach(
        aviso => $("#result-productos").append(_crearHtmlProducto(aviso))
    );
}

function _crearHtmlProducto(producto) {
    return htmlContenido("producto", producto,
    `
    <h4>${producto.nombre}</h4>
    <p>Categoria: ${producto.categoria}</p>
    <p>Tipo: ${producto.tipo}</p>
    <p>Precio: ${producto.precio}</p>
    <p>${_caracteristicaORestricciones(producto)}
    <img src="${producto.imagenes[0]}" alt="Imagen del producto">
    <br>
    <button>Ver Comercio</button>
    `
    );
}

function _caracteristicaORestricciones(producto) {
    if (producto.tipo == "Articulo") {
        return `Caracteristicas: ${producto.caracteristicas}`;
    }
    return `Restricciones: ${producto.restricciones}`;
}

function _idProducto(producto) {
    return idHtmlContenido("producto", producto)
}