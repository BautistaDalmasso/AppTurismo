const HIGHLIGTED_SITIO = "content-highligted";

var _enSitios = false;
var _currentHighligtedSitio = "";

var sitios = {};

function filtrarSitios() {
    let res = _obtenerSitiosFiltrados();

    _esconderSitios();
    
    _mostrarSitios(res);
}

function _obtenerSitiosFiltrados() {
    let filtro = $("#search-sitio").val();

    return sitios.filter(
        sitio => sitio.nombre.includes(filtro) || sitio.descripcion.includes(filtro)
    );
}

function agregarSitios() {
    sitios.forEach(
        sitio => _agregarSitio(sitio)
    );
}

function _agregarSitio(sitio) {
    sitios[_idSitio(sitio)] = sitio;
    _agregarMarkerSitio(sitio);
    _agregarSitioAlContenido(sitio);
}

function _agregarMarkerSitio(sitio) {
    agregarMarker(
        _idSitio(sitio), sitio.posicion,
        `<div class="popup">
        ${sitio.nombre}<br/>${sitio.descripcion}
        </div>`,
        [["click", function () { highlightSitio(sitio) }]]
    );
}

function _agregarSitioAlContenido(sitio) {
    $("#result-sitios").append(_crearHtmlSitio(sitio));
}

function toggleSitios() {
    _enSitios = !_enSitios;
    sitios.forEach(
        sitio => setMarkerVisibility(_idSitio(sitio), _enSitios)
    );
    _removerSitioHighlight();
}

function _crearHtmlSitio(sitio) {
    let argumento = `"${_idSitio(sitio)}"`;
    return htmlContenido("sitio", sitio,
        `
        <h4>${sitio.nombre}</h4>
        <p>Descripción: ${sitio.descripcion}</p>
        <p>Lugar: ${sitio.lugar}</p>
        <button onClick=irASitio(${argumento})>Ir al sitio</button>
        `
    );
}

function irASitio(idSitio) {
    let sitio = sitios[idSitio];
    highlightSitio(sitio);
    irA(sitio.posicion);
    abrirPopup(idSitio);
}

function highlightSitio(sitio) {
    let soloRemover = _currentHighligtedSitio == _idSitio(sitio);
    _removerSitioHighlight();
    if (soloRemover) {
        return;
    }
    $(`#${_idSitio(sitio)}`).addClass(HIGHLIGTED_SITIO);
    _currentHighligtedSitio = _idSitio(sitio);
}

function _removerSitioHighlight() {
    if (_currentHighligtedSitio != "") {
        $(`#${_currentHighligtedSitio}`).removeClass(HIGHLIGTED_SITIO);
        _currentHighligtedSitio = "";
    }
}

function _idSitio(sitio) {
    return idHtmlContenido("sitio", sitio);
}

function _esconderSitios() {
    _manipularSitios(sitios, [
        sitio => setMarkerVisibility(_idSitio(sitio), false),
        sitio => $(`#${_idSitio(sitio)}`).hide()
    ]);
}

function _mostrarSitios(sitiosAMostrar) {
    _manipularSitios(sitiosAMostrar, [
        sitio => setMarkerVisibility(_idSitio(sitio), true),
        sitio => $(`#${_idSitio(sitio)}`).show()
    ]);
}

function _manipularSitios(sitiosAManipular, callbacks) {
    callbacks.forEach(
        callback =>
        sitiosAManipular.forEach(
            sitio => callback(sitio)
        )
    );
}
