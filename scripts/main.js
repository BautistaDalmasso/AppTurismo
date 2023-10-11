const NAV_INICIAL = "eventos";

function main() {
    iniciarMapa();
    changeNavItem(NAV_INICIAL);
    agregarHTMLEventos(eventos);
    agregarPuntosDeAsistencia();
}

function idHTMLContenido(tipo, objeto) {
    return `${tipo}-${objeto.id}`;
}

function htmlContenido(tipo, objeto, texto) {
    return `
    <div id="${idHTMLContenido(tipo, objeto)}" class="contenido">
        ${texto}
    </div>
    `;
}
