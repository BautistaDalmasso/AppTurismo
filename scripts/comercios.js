var _enComercios = false;

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
        [["click", function () {console.log("Highlight comercio")}]]
    );
}

function _agregarComercioAlContenido(comercio) {
    $("#result-comercios").append(_crearHtmlComercio(comercio));
}

function _crearHtmlComercio(comercio) {
    return htmlContenido("comercio", comercio,
    `
    <h4>${comercio.nombre}</h4>
    <p>Dirección: ${comercio.direccion}</p>
    <p>Horario: ${comercio.horario}</p>
    <button>Ir al Comercio</button> <button>Ver Productos</button>
    `
    )
}

function toggleComercios() {
    _enComercios = !_enComercios;
    comercios.forEach(
        comercio => setMarkerVisibility(_idComercio(comercio), _enComercios)
    );
}

function _idComercio(comercio) {
    return idHtmlContenido("comercio", comercio)
}