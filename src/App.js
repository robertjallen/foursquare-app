import React, {useEffect} from 'react';
import './App.css';
import RecipesList from './components/RecipesList'
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
  console.log(recipes)

  useEffect(()=>{
    dispatch(fetch())
  },[])

  return (
    <div className="App">
      <RecipesContext.Provider value={recipes}>
        <Route exact path='/' render={props => <RecipesList {...props} /> }/>
      </RecipesContext.Provider>
      
    </div>
  );
}

export default App;