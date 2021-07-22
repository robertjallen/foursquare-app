import React from 'react'

export default function RecipesCard({recipe}) {
  return (
    <div className="card">
      <h3>{recipe.title}</h3>
      <button>ingredients</button>
    </div>
  )
}