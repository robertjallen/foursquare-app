import {FETCH_SUCCESS, POST_SUCCESS, REMOVE_ITEM} from '../actions/action'

const initialState = {
    recipes: [],
    cart: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            return{
                ...state,
                recipes: [...action.payload]
            }

        case POST_SUCCESS:
            return {
                ...state,
                cart: [...action.payload]
            }
            console.log(state.cart)
        case REMOVE_ITEM:
                return {
                    ...state,
                    cart: state.cart.filter((item)=>{
                        return item.id !== action.payload.id
                    })
                }    

        default:
            return{
                ...state
            }
    }
}