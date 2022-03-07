
const mongoose = require('mongoose')


const itinerariesSchema = new mongoose.Schema({
    city:{type:String,required:true},
    event:{type:String,required:true},
    imgItinerarie:{type:String,required:true},
    imageUser:{type:String,required:true},
    nameUser:{type:String,required:true},
    price:{type:String,required:true},
    duration:{type:String,required:true},
    likes:{type:String,required:true},
    hashtag:{type:String,required:true},  /* este despues es un modelo aparte */
    comments:{type:Array,required:true}
})


const Itineraries = mongoose.model('itineraries', itinerariesSchema)
module.exports= Itineraries 


