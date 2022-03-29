/* los cambios al estado inicial se realizan a través de funciones puras, que son los reducers */

import { combineReducers } from 'redux'
/* permite alojar todos los reducers en uno solo */
import citiesReducer from './citiesReducer'
import userReducer from './usersReducer'
import itinerariesReducer from './itinerariesReducer'
import activitiesReducer from './activitiesReducer'


const mainReducer = combineReducers({
 
    citiesReducer,
    itinerariesReducer,
    userReducer,
    activitiesReducer
    
})

export default mainReducer