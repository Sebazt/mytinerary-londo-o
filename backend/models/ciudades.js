/* Aquí se crea el modelo de colección para interactuar con la base de datos, el tipo de datos de cada propiedad, y si este es requerido o no.  */

/* models es lo primero que se determina dentro del backend, ruta num 1 */

const mongoose = require('mongoose')
/* esta libreria permite modelar o hacer consltas a  los datos de mi mongoDB */

const ciudadesSchema = new mongoose.Schema({
    image:{type:String,required:true},
    name:{type:String,required:true}, /* city */
    country:{type:String,required:true},
    flag:{type:String,required:true},
    culture:{type:String,required:true},
    countryculture:{type:String,required:true}
})

/*  moongose es un constructor y a través de .model defino un modelo, osea a qué colección me conecto y qué propiedades necesito. cada modelo coneecta con una colección dif.*/
const Ciudades = mongoose.model('ciudades', ciudadesSchema)

module.exports= Ciudades  /* esta es llamada por el controlador */





