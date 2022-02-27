/* Aquí se requieren los controladores con el fin de extraer las funciones que necesitemos, además se establece en una ruta linea 7 */
const Router = require('express').Router()

const ciudadesController = require('../controllers/ciudadesController')
const {obtenerCiudades} = ciudadesController

/* a través del metodo .get se obtiene los datos que yo requiera */
Router.route('/allcities')
.get(obtenerCiudades)

module.exports = Router