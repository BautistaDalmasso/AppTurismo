function agregarHTMLEventos() {
    eventos.forEach(
        evento => $("#cont-eventos").append(crearHTMLEvento(evento))
    );
}

function crearHTMLEvento(evento) {
    return `
    <div id="evento-${evento.id}" class="evento">
        <h4>${evento.nombre}</h4>
        <p>Descripción:</p>
        <p>${evento.descripcion}</p>
        <p>En: ${evento.lugar}</p>
        <p>Fecha: ${evento.fecha} Hora: ${evento.hora}</p>
        <img src="${evento.imagen}" alt="Imagen del evento">
        <hr>
    </div>`;
}