const HIGHLIGTED_COMERCIO = "content-highligted";

var _enComercios = false;
var _currentHighligtedComercio = "";
var _comFiltroTexto = "";

var _comercios = {};

function agregarComercios() {
    comercios.forEach(
        comercio => _agregarComercio(comercio)
    );
}

function _agregarComercio(comercio) {
    _comercios[_idComercio(comercio)] = comercio;
    _agregarMarkerComercio(comercio);
    _agregarComercioAlContenido(comercio);
}

function _agregarMarkerComercio(comercio) {
    agregarMarker(
        _idComercio(comercio), comercio.posicion, 
        `<div class="popup">
        ${comercio.nombre}
        </div>`,
        [["click", function () {highlightComercio(comercio)}]]
    );
}

function _agregarComercioAlContenido(comercio) {
    $("#result-comercios").append(_crearHtmlComercio(comercio));
}

function _crearHtmlComercio(comercio) {
    let argumento = `"${_idComercio(comercio)}"`;
    return htmlContenido("comercio", comercio,
    `
    <h4>${comercio.nombre}</h4>
    <p>Dirección: ${comercio.direccion}</p>
    <p>Horario: ${comercio.horario}</p>
    <button onClick=irAComercio(${argumento})>Ir al Comercio</button> 
    <button onClick=verProductos(${comercio.id})>Ver Productos</button>
    `
    )
}

function irAComercio(idComercio) {
    let comercio = _comercios[idComercio];
    irA(comercio.posicion);
    abrirPopup(idComercio);
    highlightComercio(comercio);
}

function verProductos(idComercio) {
    changeNavItem("productos");
    filtrarProductosPorComercio(idComercio);
}

function filtrarComercioPorId(idComercio) {
    let comercio = comercios[idComercio];

    _esconderComercios();
    $(`#${_idComercio(comercio)}`).show();
    highlightComercio(comercio);
}

function toggleComercios() {
    _enComercios = !_enComercios;
    comercios.forEach(
        comercio => setMarkerVisibility(_idComercio(comercio), _enComercios)
    );
    _removeComercioHighlight();
}

function highlightComercio(comercio) {
    let soloRemover = _currentHighligtedComercio == _idComercio(comercio);
    _removeComercioHighlight();
    if (soloRemover) {
        return;
    }
    $(`#${_idComercio(comercio)}`).addClass(HIGHLIGTED_COMERCIO);

    _currentHighligtedComercio = _idComercio(comercio);
}

function _removeComercioHighlight() {
    if (_currentHighligtedComercio != "") {
        $(`#${_currentHighligtedComercio}`).removeClass(HIGHLIGTED_COMERCIO);
        _currentHighligtedComercio = "";
    }
}

function filtrarComercios() {
    _comFiltroTexto = $("#search-comercio").val().toLowerCase();

    res = comercios.filter(
        comercio => comercio.nombre.toLowerCase().includes(_comFiltroTexto)
    );

    _esconderComercios();
    _mostrarComercios(res);
}

function _esconderComercios() {
    comercios.forEach(
        comercio => $(`#${_idComercio(comercio)}`).hide()
    );
}

function _mostrarComercios(comerciosAMostrar) {
    comerciosAMostrar.forEach(
        comercio => $(`#${_idComercio(comercio)}`).show()
    );
}

function _idComercio(comercio) {
    return idHtmlContenido("comercio", comercio);
}