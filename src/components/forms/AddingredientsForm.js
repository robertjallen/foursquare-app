import React from 'react'



export default function AddingredientsForm({recipe, visible}) {
  // console.log(recipe.extendedIngredients)
  return (
    <div className={visible ? "hidden" : "visible"}>

     modal
     {recipe.id}
     <br/>
     {recipe.extendedIngredients.map((item) => {
        return <li>
          <input type="checkbox" value={item.name} name={item.name}/>{item.name}
        </li> 
      })}
      
    </div>
  )
}
