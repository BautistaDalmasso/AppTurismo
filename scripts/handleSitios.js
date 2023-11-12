const HIGHLIGTED_SITIO = "content-highligted";

var _enSitios = false;
var _currentHighligtedSitio = "";

var sitios = {};

function filtrarSitios() {
    console.log('filtrarSitios called');
    let res = _obtenerSitiosFiltrados();

    _esconderSitios();

    _mostrarSitios(res);
}

function _obtenerSitiosFiltrados() {
    console.log('_obtenerSitiosFiltrados called');
    let filtro = $("#search-sitio").val();

    return sitiosYAtractivos.filter(
        sitio => sitio.nombre.includes(filtro) || sitio.descripcion.includes(filtro)
    );
}

function agregarSitios() {
    console.log('agregarSitios called');
    sitiosYAtractivos.forEach(
        sitio => _agregarSitio(sitio)
    );
}

function _agregarSitio(sitio) {
    console.log('_agregarSitio called');
    sitios[_idSitio(sitio)] = sitio;
    _agregarMarkerSitio(sitio);
    _agregarSitioAlContenido(sitio);
}

function _agregarMarkerSitio(sitio) {
    console.log('_agregarMarkerSitio called');
    agregarMarker(
        _idSitio(sitio), sitio.posicion,
        `<div class="popup">
        ${sitio.nombre}<br/>${sitio.descripcion}
        </div>`,
        [["click", function () { highlightSitio(sitio) }]]
    );
}

function _agregarSitioAlContenido(sitio) {
    console.log('_agregarSitioAlContenido called');
    $("#result-sitios").append(_crearHtmlSitio(sitio));
}

function toggleSitios() {
    console.log('toggleSitios called');
    _enSitios = !_enSitios;
    sitiosYAtractivos.forEach(
        sitio => setMarkerVisibility(_idSitio(sitio), _enSitios)
    );
    _removerSitioHighlight();
}

function _crearHtmlSitio(sitio) {
    console.log('_crearHtmlSitio called');
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
    console.log('irASitio called');
    let sitio = sitios[idSitio];
    highlightSitio(sitio);
    irA(sitio.posicion);
    abrirPopup(idSitio);
}

function highlightSitio(sitio) {
    console.log('highlightSitio called');
    let soloRemover = _currentHighligtedSitio == _idSitio(sitio);
    _removerSitioHighlight();
    if (soloRemover) {
        return;
    }
    $(`#${_idSitio(sitio)}`).addClass(HIGHLIGTED_SITIO);
    _currentHighligtedSitio = _idSitio(sitio);
}

function _removerSitioHighlight() {
    console.log('_removerSitioHighlight called');
    if (_currentHighligtedSitio != "") {
        $(`#${_currentHighligtedSitio}`).removeClass(HIGHLIGTED_SITIO);
        _currentHighligtedSitio = "";
    }
}

function _idSitio(sitio) {
    console.log('_idSitio called');
    return idHtmlContenido("sitio", sitio);
}

function _esconderSitios() {
    console.log('_esconderSitios called');
    _manipularSitios(sitios, [
        sitio => setMarkerVisibility(_idSitio(sitio), false),
        sitio => $(`#${_idSitio(sitio)}`).hide()
    ]);
}

function _mostrarSitios(sitiosAMostrar) {
    console.log('_mostrarSitios called');
    _manipularSitios(sitiosAMostrar, [
        sitio => setMarkerVisibility(_idSitio(sitio), true),
        sitio => $(`#${_idSitio(sitio)}`).show()
    ]);
}

function _manipularSitios(sitiosAManipular, callbacks) {
    console.log('_manipularSitios called');
    callbacks.forEach(
        callback =>
        sitiosAManipular.forEach(
            sitio => callback(sitio)
        )
    );
}
