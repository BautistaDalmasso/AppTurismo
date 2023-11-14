const HIGHLIGTED_PUNTO = "content-highligted";

var _enPuntos = false;
var _currentHighligtedPunto = "";

var puntos = {};

function filtrarPuntos() {
    /** Muestra solo los Puntos de Asistencia y sus markers que se ajusten al filtro ingresado por el usuario. */
    let res = _obtenerPuntosFiltrados();

    _esconderPuntos();

    _mostrarPuntos(res);
}

function _obtenerPuntosFiltrados() {
    /** Devuelve todos los Puntos de Asistencia que se ajustan al filtro ingresado por el usuario.
    * El filtro es un texto que le permite a los usuarios buscar por nombre o dirección.
    */
    let filtro = $("#search-punto").val().toLowerCase();

    return puntosDeAsistencia.filter(
        punto => punto.nombre_lugar.toLowerCase().includes(filtro) || punto.direccion.toLowerCase().includes(filtro)
    );
}

function agregarPuntosDeAsistencia() {
    puntosDeAsistencia.forEach(
        punto => _agregarPunto(punto)
    );
}

function _agregarPunto(punto) {
    puntos[_idPunto(punto)] = punto;
    _agregarMarkerPunto(punto);
    _agregarPuntoAlContenido(punto);
}

function _agregarMarkerPunto(punto) {
    agregarMarker(
        _idPunto(punto), punto.posicion, 
        `<div class="popup">
        ${punto.tipo} de asistencia<br/>${punto.nombre_lugar}
        </div>`,
        [["click", function () {highlightPunto(punto)}]]
    );
}

function _agregarPuntoAlContenido(punto) {
    $("#result-puntos").append(crearHtmlPuntoAsistencia(punto));
}

function togglePuntos() {
    if (_enPuntos) {
        _esconderPuntos();
    }
    else {
        _mostrarPuntos(puntosDeAsistencia);
    }
    _enPuntos = !_enPuntos;
}

function crearHtmlPuntoAsistencia(punto) {
    let ret;
    if (punto.tipo == "Movil") {
        ret = _crearHtmlMovil(punto); 
    } else {
        ret = _crearHtmlCentro(punto);
    }
    return ret;
}

function _crearHtmlMovil(movil) {
    let argumento = `"${_idPunto(movil)}"`;
    return htmlContenido("punto", movil,
    `
    <h4>Móvil ${movil.nombre_lugar}</h4>
    <p>Dirección: ${movil.direccion} </p>
    <p>Contacto: ${movil.contacto}</p>
    <p>Atiende el: ${movil.dia_att}</p>
    <p>Horario de atención: ${movil.horario_att}</p>
    <button onClick=irAPunto(${argumento})>Ir al móvil</button>
    `);
}

function _crearHtmlCentro(centro) {
    let argumento = `"${_idPunto(centro)}"`;
    return htmlContenido("punto", centro,
    `
    <h4>Centro ${centro.nombre_lugar}</h4>
    <p>Dirección: ${centro.direccion}</p>
    <p>Contacto: ${centro.contacto}</p>
    <p>Horario de atención: ${centro.horario_att}</p>
    <button onClick=irAPunto(${argumento})>Ir al centro</button>
    `);
}

function irAPunto(idPunto) {
    let punto = puntos[idPunto];
    highlightPunto(punto);
    irA(punto.posicion);
    abrirPopup(idPunto);
}

function highlightPunto(punto) {
    let soloRemover = _currentHighligtedPunto == _idPunto(punto);
    _removerPuntoHighlight();
    if (soloRemover) {
        return;
    }
    $(`#${_idPunto(punto)}`).addClass(HIGHLIGTED_PUNTO);

    _currentHighligtedPunto = _idPunto(punto);
}

function _removerPuntoHighlight() {
    if (_currentHighligtedPunto != "") {
        $(`#${_currentHighligtedPunto}`).removeClass(HIGHLIGTED_PUNTO);
        _currentHighligtedPunto = "";
    }
}

function _idPunto(punto) {
    return idHtmlContenido("punto", punto);
}

function _esconderPuntos() {
    /** Esconde todos los puntos y sus markers. */ 

    _manipularPuntos(puntosDeAsistencia, 
        [punto => setMarkerVisibility(_idPunto(punto), false),
        punto => $(`#${_idPunto(punto)}`).hide()]
      );
}

function _mostrarPuntos(puntosAMostrar) {
    /** Muestra los puntos deseados y sus markers. */ 

    _manipularPuntos(puntosAMostrar, 
        [punto => setMarkerVisibility(_idPunto(punto), true),
        punto => $(`#${_idPunto(punto)}`).show()]
    );
}

function _manipularPuntos(puntosAManipular, callbacks) {
    console.log(puntosAManipular);
    callbacks.forEach(
        callback => 
        puntosAManipular.forEach(
            punto => callback(punto)
        )
    );
}
