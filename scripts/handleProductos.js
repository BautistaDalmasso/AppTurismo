var _prodFiltroTexto = "";
var _prodFiltroCategoria = "";

function agregarProductos() {
    _obtenerCotizacion();
    _agregarOpcionesCategoriaProdcutos();
    avisos.forEach(
        aviso => $("#result-productos").append(_crearHtmlProducto(aviso))
    );
}

function _agregarOpcionesCategoriaProdcutos() {
    categorias.forEach(
        categoria => $("#productos-categoria").append(
            `<option value="${categoria}">${categoria}</option>`
        )
    )
}

function _crearHtmlProducto(producto) {
    let argumento = `"${producto.comercio_id}"`

    return htmlContenido("producto", producto,
    `
    <h4>${producto.nombre}</h4>
    <p>Categoria: ${producto.categoria}</p>
    <p>Tipo: ${producto.tipo}</p>
    <p>Precio: ${producto.precio}</p>
    <p>Descripcion: ${producto.descripcion}</p>
    <p>${_caracteristicaORestricciones(producto)}
    <br>
    <img src="${producto.imagenes[0]}" alt="Imagen del producto">
    <br>
    <button onClick=verComercio(${argumento})>Ver Comercio</button>
    `
    );
}

function _caracteristicaORestricciones(producto) {
    if (producto.tipo == "Articulo") {
        return `Caracteristicas: ${producto.caracteristicas}`;
    }
    return `Restricciones: ${producto.restricciones}`;
}

function verComercio(idComercio) {
    changeNavItem("comercios");
    filtrarComercioPorId(idComercio);
}

function filtrarProductos() {
    _prodFiltroTexto = $("#search-producto").val().toLowerCase();
    _prodFiltroCategoria = $("#productos-categoria").val();

    let res = avisos.filter(
        aviso => _prodCoincideTextoFiltro(aviso) && _prodCoincideCategoria(aviso)
    );

    _esconderProductos();
    _mostrarProductos(res);
}

function _prodCoincideTextoFiltro(producto) {
    return producto.nombre.toLowerCase().includes(_prodFiltroTexto) || producto.descripcion.toLowerCase().includes(_prodFiltroTexto);
}

function _prodCoincideCategoria(producto) {
    return _prodFiltroCategoria == "Any" || producto.categoria == _prodFiltroCategoria;
}

function filtrarProductosPorComercio(idComercio) {
    let res = avisos.filter(
        aviso => aviso.comercio_id == idComercio
    );

    _esconderProductos();
    _mostrarProductos(res);
}

function _esconderProductos() {
    avisos.forEach(
        aviso => $(`#${_idProducto(aviso)}`).hide()
    );
}

function _mostrarProductos(productosAMostrar) {
    productosAMostrar.forEach(
        producto => $(`#${_idProducto(producto)}`).show()
    );
}

function _obtenerCotizacion() {
    fetch('https://www.dolarsi.com/api/api.php?type=dolar')
        .then(response => response.json())
        .then(data => {
            document.getElementById('info-cotizacion').textContent 
            = `Dolar - Compra: $ ${data[0].casa.compra} | Venta: $ ${data[0].casa.venta}`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function _idProducto(producto) {
    return idHtmlContenido("producto", producto)
}