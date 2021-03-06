/* se establecen nuestros endoinds y aqui se conecta con la base de datos para extraer el contenido ella, y se utiliza "express" --ruta num 3*/
const Router = require('express').Router() /* .router par establecer dif. rutas  */
const validator = require('../config/validator')
const passport = require('../config/passport')

const ciudadesController = require('../controllers/ciudadesController')
const { obtenerCiudades, obtenerUnaCiudad, cargarCiudad, borrarCiudad, modificarCiudad } = ciudadesController

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
const { obtenerItineraries, obtenerUnItinerario, cargarItinerario, borrarItinerario, modificarItinerario, obtenerItinerarioPorIdCiudad, likeDislike } = itinerariesController

Router.route('/allitineraries')
  .get(obtenerItineraries)
  .post(cargarItinerario)


Router.route('/allitineraries/:id')
  .delete(borrarItinerario)
  .put(modificarItinerario)
  .get(obtenerUnItinerario)


Router.route('/allitineraries/ciudad/:id')
  .get(obtenerItinerarioPorIdCiudad)


Router.route('/likesDislike/:id')
  .put(passport.authenticate("jwt", { session: false }), likeDislike)

module.exports = Router



/* ------------------------------------usuarios -------------------------------*/

const usersControllers = require('../controllers/usersControllers');
const { signUpUsers, signInUser, signOutUser, verifyEmail, verificarToken } = usersControllers

Router.route('/auth/signup')
  .post(validator, signUpUsers)

Router.route('/auth/signin')
  .post(signInUser)

Router.route('/auth/signout')
  .post(signOutUser)

Router.route('/verify/:uniqueString') //RECIBE EL LINK DE USUARIO
  .get(verifyEmail)

Router.route('/auth/signInToken')
  .get(passport.authenticate('jwt', { session: false }), verificarToken)
/* con passport entra con los datos, si pasa la autenticación pasa al controlador de verificar token */




/* ------------------------------------itinerarie -------------------------------*/

const ActivitiesController = require('../controllers/activitiesController')
const { obtenerActivities, obtenerUnActivities, cargarActivities, borrarActivities, modificarActivities, obtenerActividadporItinerario } = ActivitiesController

Router.route('/allactivities')
  .get(obtenerActivities)
  .post(cargarActivities)


Router.route('/allactivities/:id')
  .delete(borrarActivities)
  .put(modificarActivities)
  .get(obtenerUnActivities)


Router.route('/allactivities/itinerary/:id')
  .get(obtenerActividadporItinerario)




/* ------------------------------------comentarios -------------------------------*/

const commentsControllers = require('../controllers/commentsController')
const { addComment, modifiComment, deleteComment } = commentsControllers

Router.route('/itinerary/comment')
  .post(passport.authenticate('jwt', { session: false }), addComment)
  .put(passport.authenticate('jwt', { session: false }), modifiComment)

Router.route('/itinerary/comment/:id')
  .post(passport.authenticate('jwt', { session: false }), deleteComment)

module.exports = Router
