/* especifican de que forma cambia el estado de la app */
const initialState = {
  activities: [],
  auxiliar: [],
  filterActivities: [],
  activitiesByItinerary: []

}

const activitiesReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'fetchActivities':

      return {
        ...state,
        activities: action.payload,
        auxiliar: action.payload,
        // filterActivities: action.payload

      }

    case "fetchearUnaActivity":
      return {
        ...state,
        activitiesByItinerary: action.payload,
      }

    case "filterActivitiesForItinerary":
      let retorno = action.payload
      console.log(action.payload)
      return {
        ...state,
        activities: retorno
      }
    default:
      return state
  }


}
export default activitiesReducer