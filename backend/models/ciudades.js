

const mongoose = require('mongoose')


const ciudadesSchema = new mongoose.Schema({
    image:{type:String,required:true},
    name:{type:String,required:true}, /* city */
    country:{type:String,required:true},
    flag:{type:String,required:true},
    culture:{type:String,required:true},
    countryculture:{type:String,required:true}
    
})

const Ciudades = mongoose.model('ciudades', ciudadesSchema)
module.exports= Ciudades  





