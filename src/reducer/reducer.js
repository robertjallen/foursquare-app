import {FETCH_SUCCESS, POST_SUCCESS, REMOVE_FEATURE} from '../actions/action'

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
        case REMOVE_FEATURE:
                return {
                    ...state,
                    cart: {
                        ...state.cart, 
                        cart: state.cart.filter((item)=>{
                            return item.id !== action.payload.id
                        })
                    },
                    cart: [...state.cart, action.payload]
                }    

        default:
            return{
                ...state
            }
    }
}