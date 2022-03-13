/* los cambios al estado inicial se realizan a través de funciones puras, que son los reducers */

import { combineReducers } from 'redux'
/* permite alojar todos los reducers en uno solo */
import citiesReducer from './citiesReducer'
import userReducer from './usersReducer'
import itinerariesReducer from './itinerariesReducer'



const mainReducer = combineReducers({
 
    citiesReducer,
    itinerariesReducer,
    userReducer
    
})

export default mainReducer