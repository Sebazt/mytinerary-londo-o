import axios from 'axios';

/* en este archivo se centralizan todos los llamados axios para generar mayor orden en el proyc. */

/* se esta esta función asincrona  y a través del await se hace el llamado a la api para retornar el valor del data */
export const  getAllCities = async () => {
    try {
        let data = await axios.get(`http://localhost:4000/api/allcities`)
        return data
    }
    catch (error) {
        throw error
    }
}

/* resive el parametro, esta vez la llamada al axios se hace la llamada post, */
export const  cargarDatos = async (dataInput) => {
    /* va intentar utilizar el axios y no enviar un error.. */
    try {
        let data = await axios.post(`http://localhost:4000/api/allcities`,{dataInput})
        /*  el metodo post, me permite ingrear información a la bd*/
        return data
    }
    catch (error) {
        throw error
    }
}


export const  eliminarCiudad = async (id) => {
    /* No lo pasa por el body sino como un parametro, el elemento es el id y no allcities como en los demás. aquí se esta llamando a axios en su metodo.delete */
    try {
        let data = await axios.delete(`http://localhost:4000/api/allcities/${id}`)
        return data
    }
    catch (error) {
        throw error
    }
}
export const  modifyCity = async (id,dataInput) => {
    console.log(id, dataInput)
    try {
        let data = await axios.put(`http://localhost:4000/api/allcities${id}`, {dataInput})
        return data
    }
    catch (error) {
        throw error
    }
}