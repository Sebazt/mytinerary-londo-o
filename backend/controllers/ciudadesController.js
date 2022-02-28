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
    },

    loadCity: async(req, res) =>{
        /* los datos que traigo en el input se los paso en el cuerpo del post, de la petición, extrayendolos de ahí y generando una nueva construcción de ciudades.*/
        /* el req representa required, y esté se envia en un objeto llamado dataInput y va traer cada uno de las propiedades del siguiente objeto */
        const {ciudad, pais} = req.body.dataInput
        new Ciudades({ciudad:ciudad,
                      pais:pais
        }).save()
        .then((respuesta) => res.json({respuesta}))
    },

    deleteCity: async (req, res) => {
    const id = req.params.id;
        /* ´Params toma el que viene .id y lo guarda en la constante , dps con la fnción de findOne, busca ese id que vino como parametro y lo va eliminar */
    await Ciudades.findOneAndDelete({ _id: id });
  },

    modifyCity: async (req, res) => {
    const id = req.params.id; /* recibe los datos y el parametro guardandolo en el id para poder identifcar la ciudad  */
    const ciudad = req.body.dataInput;

    let ciudadb = await Ciudades.findOneAndUpdate({ _id: id }, ciudad);    
  },
};

module.exports = ciudadesController