import React, {useState, useEffect} from 'react';
import './App.css';
import RecipesList from './components/recipes/RecipesList'
import CartList from './components/cart/CartList'
// context 
import {RecipesContext} from './contexts/RecipesContext'
import {Route} from 'react-router-dom'

// import your actions
import {fetch} from './actions/action.js'
// import useSelector and useDispatch from 'react-redux'
import {useDispatch, useSelector} from 'react-redux'

function App() {
 // declare a variable for dispatch using useDispatch
  const dispatch = useDispatch()
  const recipes = useSelector(state => state)

  const cuisines = ['Cajun', 'Chinese', 'German', 'Greek', 'Indian', 'Italian', 'Japanese', 'Korean', 'Mediterranean', 'Mexican', 'Thai', 'Vietnamese']
  const [cuisine, setCuisine] = useState('')

  useEffect(()=>{
    dispatch(fetch(cuisine))
  },[cuisine])

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(fetch(cuisine))
  };

  const handleSelectChanges = e => {
    setCuisine(e.target.value)
  }

// from redux store passing into context 
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <select name={cuisine} onChange={handleSelectChanges}>
          {cuisines.map(c => {
            return <option value={c}>{c}</option>
          })}
        </select>
        <button type="submit">Submit</button>
      </form>
      
      <RecipesContext.Provider value={recipes}>
        <Route exact path='/' render={props => <RecipesList {...props} /> }/>
        <Route exact path='/cart' render={props => <CartList {...props} /> }/>
      </RecipesContext.Provider>
    </div>
  );
}

export default App;