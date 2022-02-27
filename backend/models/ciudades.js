/* Aquí se cre el modelo de colección para interactuar con la base de datos */

const mongoose = require('mongoose')

const ciudadesSchema = new mongoose.Schema({
    image:{type:String,required:true},
    name:{type:String,required:true}, /* city */
    country:{type:String,required:true}

})

const Ciudades = mongoose.model('ciudades', ciudadesSchema)
module.exports= Ciudades





