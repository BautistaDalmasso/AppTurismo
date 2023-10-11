function agregarPuntosDeAsistencia() {
    puntosDeAsistencia.forEach(
        punto => dibujarPopup(punto.posicion, 
            `<div class="popup">
            ${punto.tipo} de asistencia<br/>${punto.nombre_lugar}
            </div>`)
    );
}