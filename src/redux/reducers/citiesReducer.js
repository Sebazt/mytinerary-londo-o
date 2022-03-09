/* especifican de que forma cambia el estado de la app */
const initialState = {
    cities:[],  /* estado inicial  */
    auxiliar:[],  /* este se crea con el fin de tener el dato puro de la api.  */
   filterCities: [], 
}

const citiesReducer = (state = initialState, action)=>{

    switch(action.type){
        case 'fetch': /* este caso se solicita en en actions, a través del dispatch */

            return {
                ...state,  /*toma el estado, y dependiendo de la fun. genera un cambio de valor*/
                cities: action.payload,
                auxiliar: action.payload,
                filterCities: action.payload  /* payload representa el nombre del envio */
            }

        case 'delete':
            return {
                ...state,
                cities: action.payload
            }

        case 'cargarCity':
            let cities = [...state.cities]
            cities.push(action.payload)
            return{
                ...state,
                cities, 
                auxiliar: [...cities]
            }

        case 'filtro':
            const filtrado = action.payload.cities.filter((product => product.name.toLowerCase().startsWith(action.payload.value.toLowerCase().trim())))

            return {
                ...state,
                filterCities: filtrado

            }
        default:
            return state
    }      


}
export default citiesReducer