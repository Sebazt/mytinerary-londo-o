/* aquí se utiliza el modelo con el fin de obtener las ciudades de "models", además se crea una constante que representa un objeto; que se utiliza para determinar las condiciones de la base de datos */

const Ciudades = require('../models/ciudades') /* requiero el modelo ---ruta num 2 */

const ciudadesController = {/* es un objeto, cada propiedad es una función asincrona */

    obtenerCiudades:  async (req,res)=>{ 
        let ciudades
        let error = null
        try{ /* intenta hacer algo esperando dar una respuesta o el catch */
            ciudades = await Ciudades.find()
            /* va esperar la respueta de ciudades, y o va pasar a la var de linea 8"Ciudades" */
        }catch(err){  /* Si no lo consigue se establece un catch */
            error = err            
        }
        res.json({
            response : error ? 'ERROR' : {ciudades},
            success: error ? false : true,
            error:error
        })
    },

   obtenerUnaCiudad: async (req, res)=>{
        const id =req.params.id
        console.log(req.params)
        
        let ciudad
        let error = null

        try{
            ciudad = await Ciudades.findOne({_id:id})
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


    cargarCiudad: async(req,res)=>{
        const {image, name, country, flag, culture, countryculture} = req.body.dataInput 
        new Ciudades({image:image, 
                     name:name,
                     country: country,
                     flag: flag,
                     culture:culture,
                     countryculture:countryculture}).save()
            .then((respuesta) => res.json({respuesta}))  
    },



    borrarCiudad: async (req,res)=>{ 
        const id = req.params.id
        

           await Ciudades.findOneAndDelete({_id:id})
           .then((respuesta) => res.json({respuesta}))

    },


    modificarCiudad: async (req, res)=>{
        const id = req.params.id
        const ciudad = req.body.dataInput

        let ciudadb = await Ciudades.findOneAndUpdate({_id:id}, ciudad) 
        .then((respuesta) => res.json({respuesta}))
    }

};

module.exports = ciudadesController