import { PRODUCT_LIST } from '../constants'

// const initialState = {
//     cardData: []
// }

export default function productData(state = [], action) {
    switch (action.type) {
        case PRODUCT_LIST:
            console.warn("reducer",action)
            return [action.data]
        default:
            return state
    }
}