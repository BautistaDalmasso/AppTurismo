
var eventos = [
    {
        "imagen": "imagenes/event1.jpg",
        "id": 1,
        "nombre": "Función de Dj JS",
        "descripcion": "El Dj JS tocará en la plaza de San Miguel",
        "lugar": "Plaza de San Miguel",
        "fecha": "08/11/2023",
        "hora": "22:00"
    },
    {
        "imagen": "imagenes/event2.jpg",
        "id": 2,
        "nombre": "Función de Dj HTML",
        "descripcion": "El Dj HTML se batirá en un duelo a muerte con el Dj JS.",
        "lugar": "Estación de San Miguel",
        "fecha": "08/11/2023",
        "hora": "23:30"
    },
    {
        "imagen": "imagenes/event1.jpg",
        "id": 3,
        "nombre": "Velorio del Perdedor",
        "descripcion": "Se realizará el velorio del perdedor de la pelea a muerte.",
        "lugar": "Cementerio de San Miguel",
        "fecha": "10/11/2023",
        "hora": "10:00"
    },
]

var puntosDeAsistencia = [
    {
        "id": 1,
        "tipo": "Centro",
        "posicion": [-34.521672, -58.701168],
        "nombre_lugar": "UNGS",
        "direccion": "Juan María Gutiérrez 1150",
        "contacto": "(54 11) 4469-7795",
        "horario_att": "8:00 - 22:00"
    },
    {
        "id": 2,
        "tipo": "Movil",
        "posicion": [-34.523197, -58.700870],
        "nombre_lugar": "Colectivo al costado de la UNGS",
        "direccion": "Juan María Gutiérrez 1150",
        "contacto": "1111-1111",
        "dia_att": "11-11-2023",
        "horario_att": "11:00 - 22:00"
    },
    {
        "id": 3,
        "tipo": "Centro",
        "posicion": [-34.54337306092059, -58.7123753528407],
        "nombre_lugar": "Municipalidad de San Miguel",
        "direccion": "Domingo Faustino Sarmiento 1551",
        "contacto": "1111-1111",
        "horario_att": "11:00 - 22:00"
    },
]

var comercios = [
    {
        "id": 1,
        "nombre": "Terrazas de Mayo",
        "posicion": [-34.53138840321933, -58.703033188918184],
        "direccion": "Av. Gral. Juan Gregorio Lemos 101",
        "horario": "10:00 - 22:00"
    },
    {
        "id": 2,
        "nombre": "Ungs Deportes",
        "posicion": [-34.52216560453723, -58.697955464415905],
        "direccion": "José León Suárez 1466",
        "horario": "08:00 - 22:00"
    },
    {
        "id": 3,
        "nombre": "Bingo San Miguel",
        "posicion": [-34.54174706915652, -58.70957893689795],
        "direccion": "Belgrano 1099",
        "horario": "00:00 - 23:59"
    }
]

var categorias = ["Comida", "Entretenimiento", "Cultura", "Deportes", "Electrónica", "Ropa", "Hogar"]

var avisos = [
    {
        "id": 1,
        "comercio_id": 1,
        "nombre": "Paseo en Coches de Animales",
        "categoria": categorias[1],
        "descripcion": "Un paseo por el shopping en los coches de peluche de animales.",
        "tipo": "Servicio",
        "restricciones": "Solo para menores de 10 años.",
        "precio": "300$ por 15 minutos",
        "imagenes": ["imagenes/coche_animales.jpg"]
    },
    {
        "id": 2,
        "comercio_id": 1,
        "nombre": "Proyección de El Señor de los Anillos",
        "categoria": categorias[1],
        "descripcion": "Asistí a la proyección de El Señor de Los Anillos en el cine del shopping!",
        "tipo": "Servicio",
        "restricciones": "No se puede ingresar a la sala con comida de afuera.",
        "precio": "3.500$",
        "imagenes": ["imagenes/el_senior_anillos.jpg"]
    },
    {
        "id": 3,
        "comercio_id": 1,
        "nombre": "Hamburguesa",
        "categoria": categorias[0],
        "descripcion": "Hamburguesa.",
        "tipo": "Articulo",
        "caracteristicas": "Hamburguesa de carne con queso y panceta.",
        "precio": "1.899$",
        "imagenes": ["imagenes/hamburguesa.webp"]
    },
    {
        "id": 4,
        "comercio_id": 2,
        "nombre": "Partido de Futbol",
        "categoria": categorias[3],
        "descripcion": "Partidos de futbol para hombres, mujeres o mixtos.",
        "tipo": "Servicio",
        "restricciones": "Para mayores de 18 años, hay partidos por sexo y partidos mixtos.",
        "precio": "El equipo que pierde paga la coca.",
        "imagenes": ["imagenes/futbol_ungs.jpg"]
    },
    {
        "id": 5,
        "comercio_id": 3,
        "nombre": "Fichas para el Bingo",
        "categoria": categorias[1],
        "descripcion": "Fichas para utilizar en los distintos entretenimientos de Casino.",
        "tipo": "Articulo",
        "caracteristicas": "Redondas.",
        "precio": "Convertí hasta un maximo de 10.000$ a fichas.",
        "imagenes": ["imagenes/fichas.webp"]
    }
]

var sitios = [
    {
        "id": 1,
        "posicion": [-34.521672, -58.701168],
        "nombre": "Universidad Nacional de General Sarmiento",
        "descripcion": "La mejor universidad de la zona.",
        "lugar": "Los Polvorines"
    },
    {
        "id": 2,
        "posicion": [-34.521672, -58.701168],
        "nombre": "Universidad Nacional de General Sarmiento",
        "descripcion": "La mejor universidad de la zona.",
        "lugar": "Los Polvorines"
    },
    {
        "id": 3,
        "posicion": [-34.521672, -58.701168],
        "nombre": "Universidad Nacional de General Sarmiento",
        "descripcion": "La mejor universidad de la zona.",
        "lugar": "Los Polvorines"
    },
]