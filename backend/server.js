/* aquí se entrelaza toda la comunicación entre el frontend y backend */
/* la conexión entre el back y el fron se lleva a cabo a través de una llamada axios definida en la ruta */

require('dotenv').config()
const cors = require( 'cors') /* cors, permite acceder a recursos desde un servidor dif */
const express = require("express")
require("./config/database")
const Router = require('./routes/routes') /* requiero mis rutas  ruta num 4 */
const PORT = 4000

const app = express()

/* midleware, son servicios que utiliza nuestra api, para establecer diferentes comportamientos  se encarga de gestionar los datos. por ejemplo las rutas, para establecer los controladores  en este caso son las rutas y desde ahí utilizar los controladores*/

app.use(cors());
app.use(express.json());
/* express.json este middleware, es un metodo de express permite a nuestra api establecer respuestas en formato JSON para que puedan ser interpretadas por el frontend */
app.use('/api',Router)  /* Establezco ruta */


app.listen (PORT, () => console.log ("server ready on port" + PORT))

