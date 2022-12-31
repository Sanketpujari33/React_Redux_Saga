import {combineReducers} from 'redux'
import cardItems from './Reducer'
import productData from './productReducer'

export default combineReducers({
    cardItems, 
    productData,
})