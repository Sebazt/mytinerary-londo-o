/* especifican de que forma cambia el estado de la app */
const initialState = {
    itineraries:[],
    auxiliar:[],
   filteritineraries: [], 
}

const itinerariesReducer = (state = initialState, action)=>{

    switch(action.type){
        case 'fetchItinerary': /* este caso se solicita en en actions, a través del dispatch */

            return {
                ...state,
                itineraries: action.payload,
                auxiliar: action.payload,
                filteritineraries: action.payload
            }

        case 'deleteItinerary':
            return {
                ...state,
                itineraries: action.payload
            }

        case 'cargarItinerary':
            let itineraries = [...state.itineraries]
            itineraries.push(action.payload)
            return{
                ...state,
                itineraries, 
                auxiliar: [...itineraries]
            }

        case 'filtroItinerary':
            const filtrado = action.payload.itineraries.filter((product => product.name.toLowerCase().startsWith(action.payload.value.toLowerCase().trim())))

            return {
                ...state,
                filteritineraries: filtrado

            }

        case "filterItinerarieForCities":
            let retorno = action.payload
            console.log(action.payload)
            return{
                ...state,
                itineraries:retorno
            }

        default:
            return state
    }       /* es caso de que no retorne un caso, devuelve el estado como inicio */


}
export default itinerariesReducer