import {FETCH_SUCCESS, POST_SUCCESS} from '../actions/action'

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

        default:
            return{
                ...state
            }
    }
}