/* se establecen nuestros endoinds y aqui se conecta con la base de datos para extraer el contenido ella, y se utiliza "express" --ruta num 3*/
const Router = require('express').Router() /* .router par establecer dif. rutas  */

const ciudadesController = require('../controllers/ciudadesController')
const {obtenerCiudades, obtenerUnaCiudad, cargarCiudad, borrarCiudad, modificarCiudad} = ciudadesController

Router.route('/allcities') /* endpoint de la api. */
.get(obtenerCiudades) /* enviar solicitud para obtener datos. */
/* a través del metodo .get se obtiene los datos que yo requiera */
.post(cargarCiudad) /* nos trae información desde lo que se ingresa en el frontend hasta nuestra base de datos */

Router.route('/allcities/:id')
.delete(borrarCiudad) /* a través del endpoint(linea 13) se hacen los metodos del, y put */
.put(modificarCiudad) /* put modifica--- */
.get(obtenerUnaCiudad)



/* ------------------------------------itinerarie -------------------------------*/

const itinerariesController = require('../controllers/itinerariosController')
const {obtenerItineraries, obtenerUnItinerario, cargarItinerario, borrarItinerario, modificarItinerario} = itinerariesController

Router.route('/allitineraries')
.get(obtenerItineraries)
.post(cargarItinerario)


Router.route('/allitineraries/:id')
.delete(borrarItinerario)
.put(modificarItinerario)
.get(obtenerUnItinerario)


module.exports = Router


