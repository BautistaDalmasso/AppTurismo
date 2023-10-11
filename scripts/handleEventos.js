function filtrarEventos() {
    /** Muestra solo los eventos que se ajustan al filtro ingresado por el usuario. */
    let res = _obtenerEventosFiltrados();
    
    _esconderEventos();
    _mostrarEventos(res);
}

function _obtenerEventosFiltrados() {
    /** Devuelve todos los Eventos que se ajustan al filtro ingresado por el usuario.
     *  El filtro es un texto que le permite a los usuarios buscar por nombre o descripción.
     */
    let filtro = $("#search-event").val();
    
    return eventos.filter(
        evento => evento.nombre.includes(filtro) || evento.descripcion.includes(filtro)
    );
}

function _esconderEventos() {
    /** Esconde todos los eventos. */
    manipularEventos(eventos, evento => $(`#${_idEvento(evento)}`).hide());
}

function _mostrarEventos(eventosAMostrar) {
    /** Muestra los eventos deseados. */ 
    manipularEventos(eventosAMostrar, evento => $(`#${_idEvento(evento)}`).show());
}

function manipularEventos(eventosAManipular, callback) {
    eventosAManipular.forEach(
        evento => callback(evento)
    );
}

function agregarHtmlEventos(eventosAAgregar) {
    eventosAAgregar.forEach(
        evento => $("#result-eventos").append(crearHtmlEvento(evento))
    );
}

function crearHtmlEvento(evento) {
    return htmlContenido("evento", evento,
    `
    <h4>${evento.nombre}</h4>
    <p>Descripción:</p>
    <p>${evento.descripcion}</p>
    <p>En: ${evento.lugar}</p>
    <p>Fecha: ${evento.fecha} Hora: ${evento.hora}</p>
    <img src="${evento.imagen}" alt="Imagen del evento">
    `);
}

function _idEvento(evento) {
    return idHtmlContenido("evento", evento);
}
