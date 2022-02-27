/* aquí se utiliza el modelo con el fin de obtener las ciudades, además se crea una constante que representa un objeto; que se utiliza para determinar las condiciones de la base de datos */

const Ciudades = require('../models/ciudades')

const ciudadesController = {

    obtenerCiudades:  async (req,res)=>{
        let ciudades
        let error = null

        try{
            ciudades = await Ciudades.find()
            /* va esperar la respueta de ciudades, y o va pasar a la var de linea 6"Ciudades" */
        }catch(err){  /* Si no lo consigue se establece un catch */
            error = err            
        }
        res.json({
            response : error ? 'ERROR' : {ciudades},
            success: error ? false : true,
            error:error
        })
    }
}
module.exports = ciudadesController