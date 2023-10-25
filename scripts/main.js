const NAV_INICIAL = "eventos";

function main() {
    iniciarMapa();
    changeNavItem(NAV_INICIAL);
    agregarHtmlEventos(eventos);
    agregarPuntosDeAsistencia();
    agregarComercios();
}

function idHtmlContenido(tipo, objeto) {
    /** Devuelve el id para un elemento de contenido generado dinamicamente.*/
    return `${tipo}-${objeto.id}`;
}

function htmlContenido(tipo, objeto, texto) {
    /** Devuelve el html para un elemento de contenido generado dinamicamente. */
    return `
    <div id="${idHtmlContenido(tipo, objeto)}" class="contenido">
        ${texto}
    </div>
    `;
}
