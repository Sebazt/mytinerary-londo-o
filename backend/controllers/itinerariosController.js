const Itineraries  = require('../models/itineraries') 

const itinerariesController = {

    obtenerItineraries:  async (req,res)=>{ 
        let itineraries
        let error = null
        try{ 
            itineraries = await Itineraries.find()
        }catch(err){  
            error = err            
        }
        res.json({
            response : error ? 'ERROR' : {itineraries},
            success: error ? false : true,
            error:error
        })
    },

   obtenerUnItinerario: async (req, res)=>{
        const id =req.params.id
        console.log(req.params)
        
        let ciudad
        let error = null

        try{
            ciudad = await Itineraries.findOne({_id:id})
            console.log(ciudad)
        }catch(err){
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : ciudad, 
            success: error ? false : true,
            error: error
        })

    },


    cargarItinerario: async(req,res)=>{
        const {city, event, imageUser, nameUser, price, duration, likes, hashtag, activities, comments} = req.body.dataInput
        new Itineraries({city:city,  
                     event:event,
                     imageUser: imageUser,
                     nameUser: nameUser,
                     price:price,
                     duration:duration,
                     likes:likes,
                     hashtag:hashtag,
                     activities:activities,
                     comments:comments}).save()
            .then((respuesta) => res.json({respuesta}))  
    },
 


    borrarItinerario: async (req,res)=>{ 
        const id = req.params.id
        

           await Itineraries.findOneAndDelete({_id:id})
           .then((respuesta) => res.json({respuesta}))

    },


    modificarItinerario: async (req, res)=>{
        const id = req.params.id
        const ciudad = req.body.dataInput

        let ciudadb = await Itineraries.findOneAndUpdate({_id:id}, ciudad) 
        .then((respuesta) => res.json({respuesta}))
    }

};

module.exports = itinerariesController