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
    let filtro = $("#search-punto").val();

    return puntosDeAsistencia.filter(
        punto => punto.nombre_lugar.includes(filtro) || punto.direccion.includes(filtro)
    );
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
    callbacks.forEach(
        callback => 
        puntosAManipular.forEach(
            punto => callback(punto)
        )
    );
}

function agregarPuntosDeAsistencia() {
    _dibujarMarkersPuntos();
    _agregarPuntosAlContenido();
}

function _dibujarMarkersPuntos() {
    puntosDeAsistencia.forEach(
        punto => dibujarMarker(
            _idPunto(punto), punto.posicion, 
            `<div class="popup">
            ${punto.tipo} de asistencia<br/>${punto.nombre_lugar}
            </div>`)
    );
}

function _agregarPuntosAlContenido() {
    puntosDeAsistencia.forEach(
        punto => $("#result-puntos").append(crearHtmlPuntoAsistencia(punto))
    );
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
    return htmlContenido("punto", movil,
    `
    <h4>Móvil ${movil.nombre_lugar}</h4>
    <p>Dirección: ${movil.direccion} </p>
    <p>Contacto: ${movil.contacto}</p>
    <p>Atiende el: ${movil.dia_att}</p>
    <p>Horario de atención: ${movil.horario_att}</p>
    <button onClick=irA([${movil.posicion}])>Ir al móvil</button>
    `);
}

function _crearHtmlCentro(centro) {
    return htmlContenido("punto", centro,
    `
    <h4>Centro ${centro.nombre_lugar}</h4>
    <p>Dirección: ${centro.direccion}</p>
    <p>Contacto: ${centro.contacto}</p>
    <p>Horario de atención: ${centro.horario_att}</p>
    <button onClick=irA([${centro.posicion}])>Ir al centro</button>
    `);
}

function _idPunto(punto) {
    return idHtmlContenido("punto", punto);
}
