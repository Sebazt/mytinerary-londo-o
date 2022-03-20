import axios from 'axios';

const activitiesAction = {
  
  fetchearActivity: () => {
    return async (dispatch, getState) => {
      const res = await axios.get('http://localhost:4000/api/allactivities')
      dispatch({ type: 'fetchAcitivities', payload: res.data.respuesta.activities})
    }
  },


  filterActivityforItinerary: (id) => {

    return async (dispatch, getState) => {
      const res = await axios.get(`http://localhost:4000/api/allactivities/itinerary/${id}`)
      dispatch({ type: "filterActivitiesForItinerary", payload: res.data.respuesta })
    }
  }


}

export default activitiesAction;

