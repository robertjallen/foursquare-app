import axios from 'axios'
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const POST_SUCCESS = "POST_SUCCESS"

// fetch
export const fetch = () => {
    return dispatch => {
        axios
        .get('https://api.spoonacular.com/recipes/random?number=10&tags=vegetarian,dessert&apiKey=463abc6518064e31876a580950e4c5f7')
        .then( res => {
            console.log("fetch response", res.data)
            dispatch({type: FETCH_SUCCESS, payload: res.data.recipes})
        })
    }
}

