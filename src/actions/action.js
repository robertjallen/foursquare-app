import axios from 'axios'
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const POST_SUCCESS = "POST_SUCCESS"
export const REMOVE_ITEM = "REMOVE_ITEM"

// fetch
export const fetch = (cuisine) => {
    return dispatch => {
        axios
        .get(`https://api.spoonacular.com/recipes/complexSearch?number=10&cuisine=${cuisine}&addRecipeInformation=true&fillIngredients=true&apiKey=463abc6518064e31876a580950e4c5f7`)
        .then( res => {
            console.log("fetch response", res.data)
            dispatch({type: FETCH_SUCCESS, payload: res.data.results})
        })
    }
}


export const post = (items) => {
  return dispatch => {
          dispatch({type: POST_SUCCESS, payload: [...items]})
      }
  }

export const remove = (item) => {
    return {type: REMOVE_ITEM, payload: item}
}  
