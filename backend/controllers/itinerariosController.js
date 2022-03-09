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
        const {city, event, imgItinerarie, imageUser, nameUser, price, duration, likes, hashtag,  comments, ciudad} = req.body.dataInput
        new Itineraries({city:city,  
                     event:event,
                     imgItinerarie:imgItinerarie,
                     imageUser: imageUser,
                     nameUser: nameUser,
                     price:price,
                     duration:duration,
                     likes:likes,
                     hashtag:hashtag,
                     comments:comments,
                     ciudad:ciudad}).save()
            .then((respuesta) => res.json({respuesta}))  
    },
 


    borrarItinerario: async (req,res)=>{ 
        const id = req.params.id
        

           await Itineraries.findOneAndDelete({_id:id})
           .then((respuesta) => res.json({respuesta}))

    },


    modificarItinerario: async (req, res)=>{
        const id = req.params.id
        const itinerarie = req.body.dataInput

        let itinerariedb = await Itineraries.findOneAndUpdate({_id:id}, itinerarie) 
        .then((respuesta) => res.json({respuesta}))
    },

    obtenerItinerarioPorIdCiudad: async (req, res) =>{
        try {
            let itinerarie
            const id = req.params.id
            try{
                itinerarie = await Itineraries.find({ciudad:id})
            }catch(error){
                console.log(error)
            }
            res.json({respuesta:itinerarie,success:true})

        } catch (error) {
            console.log(error);
        }
    }
    

};

module.exports = itinerariesController