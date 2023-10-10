function agregarPuntosDeAsistencia() {
    puntosDeAsistencia.forEach(
        punto => dibujarPopup(punto.posicion, punto.nombre_lugar)
    );
}