/* especifican de que forma cambia el estado de la app */

const initialState = {
    cities:[],  /* estado o store inicial*/
    auxiliar:[],  /* este se crea con el fin de tener el dato puro de la api.  */
   filterCities: [], 
}

const citiesReducer = (state = initialState, action)=>{
    /* console.log(action) este es un console estrategico para idenfiticar si llegan bn los datos */
    
    switch(action.type){ /* defino cual es el valor a través del action.type */
        case 'fetch': 

            return {
                ...state,  /*toma el estado, y dependiendo de la fun. genera un cambio de valor*/
                cities: action.payload,  /* aqui estan todas las cities */
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