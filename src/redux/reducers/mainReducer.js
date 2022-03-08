import { combineReducers } from 'redux'

import citiesReducer from './citiesReducer'
import authReducer from './authReducer'


const mainReducer = combineReducers({

    citiesReducer,
    authReducer

})

export default mainReducer