/* aquí se entrelaza toda la comunicación entre el frontend y backend */
/* la conexión entre el back y el fron se lleva a cabo a través de una llamada axios definida en la ruta */
/* los midellworld son requeridos siempre en el server */


require('dotenv').config()
const cors = require( 'cors') /* cors, permite acceder a recursos desde un servidor dif */
const express = require("express")
require("./config/database")
const passport = require("passport")
const Router = require('./routes/routes') /* requiero mis rutas  ruta num 4 */
const path = require('path')
const PORT = process.env.PORT || 4000
const HOST = process.env.HOST || '0.0.0.0'
const app = express()

/* midleware, son servicios que utiliza nuestra api, para establecer diferentes comportamientos  se encarga de gestionar los datos. por ejemplo las rutas, para establecer los controladores  en este caso son las rutas y desde ahí utilizar los controladores*/

app.use(cors());
app.use(express.json());
app.use(passport.initialize())
/* express.json este middleware, es un metodo de express permite a nuestra api establecer respuestas en formato JSON para que puedan ser interpretadas por el frontend */
app.use('/api',Router)  /* ruta intermedia*/

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))
  app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'))
  })
}


app.listen(PORT, HOST, () => console.log ("server ready on port" + PORT))

