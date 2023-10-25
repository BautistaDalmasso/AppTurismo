const HIGHLIGTED_COMERCIO = "content-highligted";

var _enComercios = false;
var _currentHighligtedComercio = "";

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
    <button onClick=irAComercio(${argumento})>Ir al Comercio</button> <button>Ver Productos</button>
    `
    )
}

function irAComercio(idComercio) {
    let comercio = _comercios[idComercio];
    irA(comercio.posicion);
    abrirPopup(idComercio);
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

function _idComercio(comercio) {
    return idHtmlContenido("comercio", comercio)
}