import axios from 'axios';

const itinerariesActions = {
    /* redux no permite que las acciones sean asyncronas, por el el async esta junto al return*/
    fetchearItineraries: () =>{
       return async(dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/allitineraries')
            dispatch({type:'fetchItinerary', payload:res.data.respuesta.itineraries})/* despacho pedido */
            /* payload se utiliza para utilizar el state, es una carga */
       }
    },

    borrarItineraries: (id)=>{
        return async(dispatch, getState) => {
            try {

                const respuesta = await axios.delete('http://localhost:4000/api/allitineraries/'+id)

                dispatch({type:'deleteItinerary', payload:respuesta.data.respuesta})

            }catch(err){
                console.log(err)
            }
        }
    },
    
    filtrarItineraries: (itineraries, value)=>{

        return (dispatch,getState)=>{
            dispatch({type:'filtroItinerary', payload:{itineraries, value}})
        }
    },

    cargarItineraries: (name,itineraries)=>{
        return async(dispatch,getState)=>{
            const respuesta = await axios.post('http://localhost:4000/api/allitineraries',{name,itineraries})
            dispatch({type:'cargarItinerary', payload:respuesta.data.respuesta})

        }
    },
    
    fetchearUnItinerary: (id) =>{
        return async (dispatch, getState) => {
            const res = await axios.get("http://localhost:4000/api/allitineraries"+id)
            return (res.data.respuesta)
        }
    },

    filterItinerarieForCity: (id) =>{

        return async(dispatch, getState) =>{
            const res = await axios.get(`http://localhost:4000/api/allitineraries/ciudad/${id}`)
            dispatch({type: "filterItinerarieForCities", payload:res.data.respuesta})
        }
    }


}

export default itinerariesActions;

