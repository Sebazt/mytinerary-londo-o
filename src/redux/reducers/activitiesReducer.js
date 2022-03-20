/* especifican de que forma cambia el estado de la app */
const initialState = {
  activities: [],
  aux: [],
}

const activitiesReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'fetchAcitivities': /* este caso se solicita en en actions, a través del dispatch */

      return {
        ...state,
        activities: action.payload,
        aux: action.payload,
        filteractivities: action.payload
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
  }       /* es caso de que no retorne un caso, devuelve el estado como inicio */


}
export default activitiesReducer