import React, {useState} from 'react'
import { Button } from 'antd';
import AddingredientsForm from '../forms/AddingredientsForm';


export default function RecipesCard({recipe}) {

  const [visible, setVisible] = useState(true);

  return (
    <div className="card">
      <div className="card-header">
        <h3>{recipe.title}</h3>
        <Button
        className="button"
        type="primary"
        onClick={() => {setVisible(!visible);}}>ingredients  &#9660;</Button>
      </div>
      
      {visible ? <img src={recipe.image}/> : null }
      {!visible ? <AddingredientsForm recipe={recipe}/> : null }
    </div>
  )
}