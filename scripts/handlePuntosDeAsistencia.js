function filtrarPuntos() {
    let filtro = $("#search-punto").val();

    let res = puntosDeAsistencia.filter(
        punto => punto.nombre_lugar.includes(filtro) || punto.direccion.includes(filtro)
    );

    _manipularPuntos(puntosDeAsistencia, 
      [punto => setMarkerVisibility(idHTMLContenido("punto", punto), false),
      punto => $(`#${idHTMLContenido("punto", punto)}`).hide()]
    );

    _manipularPuntos(res, 
        [punto => setMarkerVisibility(idHTMLContenido("punto", punto), true),
        punto => $(`#${idHTMLContenido("punto", punto)}`).show()]
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
            idHTMLContenido("punto", punto), punto.posicion, 
            `<div class="popup">
            ${punto.tipo} de asistencia<br/>${punto.nombre_lugar}
            </div>`)
    );
}

function _agregarPuntosAlContenido() {
    puntosDeAsistencia.forEach(
        punto => $("#result-puntos").append(crearHTMLPuntoAsistencia(punto))
    );
}

function crearHTMLPuntoAsistencia(punto) {
    let ret;
    if (punto.tipo == "Movil") {
        ret = _crearHTMLMovil(punto); 
    } else {
        ret = _crearHTMLCentro(punto);
    }
    return ret;
}

function _crearHTMLMovil(movil) {
    return `
    <div id="${idHTMLContenido("punto", movil)}" class="contenido">
        <h4>Móvil ${movil.nombre_lugar}</h4>
        <p>Dirección: ${movil.direccion} </p>
        <p>Contacto: ${movil.contacto}</p>
        <p>Atiende el: ${movil.dia_att}</p>
        <p>Horario de atención: ${movil.horario_att}</p>
        <button onClick=irA(${movil.posicion})>Ir al móvil</button>
    </div>
    `
}

function _crearHTMLCentro(centro) {
    return htmlContenido("punto", centro,
    `
    <h4>Centro ${centro.nombre_lugar}</h4>
    <p>Dirección: ${centro.direccion}</p>
    <p>Contacto: ${centro.contacto}</p>
    <p>Horario de atención: ${centro.horario_att}</p>
    <button onClick=irA([${centro.posicion}])>Ir al centro</button>
    `);
}
