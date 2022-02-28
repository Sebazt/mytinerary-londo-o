/* Aquí se requieren los controladores con el fin de extraer las funciones que necesitemos, además se establece en una ruta linea 7 */
const Router = require('express').Router()

const ciudadesController = require('../controllers/ciudadesController')
const {obtenerCiudades, loadCity, deleteCity, modifyCity} = ciudadesController

/* a través del metodo .get se obtiene los datos que yo requiera */
Router.route('/allcities')
.get(obtenerCiudades) /* enviar solicitu para obtener datos. */
.post(loadCity) /* nos trae información desde lo que se ingresa en el frontend hasta nuestra base de datos */


Router.route('/allcities/:id')
.delete(deleteCity) /* a través del endpoint(linea 13) se hacen los metodos del, y put */
.put(modifyCity)
module.exports = Router