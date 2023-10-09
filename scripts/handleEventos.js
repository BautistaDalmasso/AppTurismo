function filtrarEventos() {
    let filtro = $("#search-event").val();
    
    let res = eventos.filter(
        evento => evento.nombre.includes(filtro) || evento.descripcion.includes(filtro)
    );
    
    manipularEventos(eventos, evento => $(`#${idEvento(evento)}`).hide());
    manipularEventos(res, evento => $(`#${idEvento(evento)}`).show());
}

function manipularEventos(eventosAManipular, callback) {
    eventosAManipular.forEach(
        evento => callback(evento)
    );
}

function agregarHTMLEventos(eventosAAgregar) {
    eventosAAgregar.forEach(
        evento => $("#result-eventos").append(crearHTMLEvento(evento))
    );
}

function crearHTMLEvento(evento) {
    return `
    <div id="${idEvento(evento)}" class="evento">
        <h4>${evento.nombre}</h4>
        <p>Descripción:</p>
        <p>${evento.descripcion}</p>
        <p>En: ${evento.lugar}</p>
        <p>Fecha: ${evento.fecha} Hora: ${evento.hora}</p>
        <img src="${evento.imagen}" alt="Imagen del evento">
        <hr>
    </div>`;
}

function idEvento(evento) {
    return `evento-${evento.id}`;
}
