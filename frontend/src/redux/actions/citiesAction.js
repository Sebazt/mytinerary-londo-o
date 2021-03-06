import axios from 'axios';

const citiesActions = {
    /* redux no permite que las acciones sean asyncronas, por el el async esta junto al return*/
    fetchearCities: () => {
        return async (dispatch, getState) => {
            const res = await axios.get('https://mytinerary-sebastian.herokuapp.com/api/allcities')
            dispatch({ type: 'fetch', payload: res.data.response.ciudades })/* despacho pedido */
            /* payload se utiliza para utilizar el state, es una carga */
        }
    },

    borrarCities: (id) => {
        return async (dispatch, getState) => {
            try {

                const respuesta = await axios.delete('https://mytinerary-sebastian.herokuapp.com/api/allcities/' + id)

                dispatch({ type: 'delete', payload: respuesta.data.respuesta })
                /* dispatch nos permite la async. a través de trunk */
            } catch (err) {
                console.log(err)
            }
        }
    },

    filtrarCities: (cities, value) => {

        return (dispatch, getState) => {
            dispatch({ type: 'filtro', payload: { cities, value } })
        }
    },

    cargarCities: (name, cities) => {
        return async (dispatch, getState) => {
            const respuesta = await axios.post('https://mytinerary-sebastian.herokuapp.com/api/allcities', { name, cities })
            dispatch({ type: 'cargarCity', payload: respuesta.data.respuesta })

        }
    },

    fetchearUnaCiudad: (id) => {
        return async (dispatch, getState) => {

            try {

                const respuesta = await axios.get("https://mytinerary-sebastian.herokuapp.com/api/allcities/" + id)
                console.log(respuesta)
                return (respuesta.data.response)

            } catch (err) {
                console.log(err)
            }
        }
    }


}

export default citiesActions;