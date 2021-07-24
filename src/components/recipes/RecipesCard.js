import React, {useState} from 'react'
import { Button } from 'antd';
import AddingredientsForm from '../forms/AddingredientsForm';


export default function RecipesCard({recipe}) {
  const [visible, setVisible] = useState(true);
  return (
    <div className="card">
      <h3>{recipe.title}</h3>
      <Button
      type="primary"
      onClick={() => {
        setVisible(false);
      }}
      >ingredients &#9660;</Button>
        <AddingredientsForm recipe={recipe} visible={visible} setVisible={setVisible}/>
    </div>
  )
}