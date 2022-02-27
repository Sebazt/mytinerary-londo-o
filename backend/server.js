require('dotenv').config()
const cors = require( 'cors')
const express = require("express")
require("./config/database")
const Router = require('./routes/routes')
const PORT = 4000

const app = express()

/* midleware, son servicios que utiliza nuestra api, para establecer diferentes comportamientos  se encarga de gestionar los datos. por ejemplo las rutas, para establecer los controladores */

app.use(cors());
app.use(express.json());
/* express.json este middleware, es un metodo de express permite a nuestra api establecer respuestas en formato JSON para que puedan ser interpretadas por el frontend */
app.use('/api',Router)


app.listen (PORT, () => console.log ("server ready on port" + PORT))

