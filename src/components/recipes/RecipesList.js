import React, {useContext} from 'react'
import {RecipesContext} from '../../contexts/RecipesContext'
import RecipesCard from './RecipesCard'

export default function RecipesList() {
    let {recipes} = useContext(RecipesContext)
    return (
        <div className="list">     
            {recipes &&
            recipes.map((recipe, id) => {
              return  <RecipesCard key={id} recipe={recipe}/>
            }) 
            }
        </div>
    )
}