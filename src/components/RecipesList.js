import React, {useContext} from 'react'
import {RecipesContext} from '../contexts/RecipesContext'
import RecipesCard from './RecipesCard'

export default function LegosList() {
    // declare a variable for your state using useSelector
    // const state = useSelector(state => state)
    
    let {recipes} = useContext(RecipesContext)
    

    console.log(recipes)
    return (
        <div className="list">     
            {recipes &&
            recipes.map((recipe) => {
              return  <RecipesCard recipe={recipe}/>
            }) 
            }
        </div>
    )
}