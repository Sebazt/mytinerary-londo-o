const initialState = {
    cities:[],
    auxiliar:[],
   filterCities: [], 
}

const citiesReducer = (state = initialState, action)=>{

    switch(action.type){
        case 'fetch':

            return {
                ...state,
                cities: action.payload,
                auxiliar: action.payload,
                filterCities: action.payload
            }

        case 'delete':
            return {
                ...state,
                cities: action.payload
            }

        case 'cargarProducto':
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