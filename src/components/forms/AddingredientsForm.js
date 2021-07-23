import React, {useState, useContext} from 'react'
import {post} from '../../actions/action';
import { useDispatch } from "react-redux";


export default function AddingredientsForm({recipe, visible, setVisible}) {

  let [newItems, setNewItems] = useState([])
  const propertyValues = Object.values(newItems);

  const dispatch = useDispatch()


  const handleChange = event => {
    setNewItems({
      ...newItems,
      [event.target.name]: event.target.value });
    console.log("newItems from handle change", newItems)
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(post(propertyValues))
    resetForm()
  }

  const resetForm = () => {
    setNewItems([]);
    setVisible("hidden")
  };

  return (
    <form onSubmit={handleSubmit} className={visible ? "hidden" : "visible"}>
     modal
     {recipe.id}
     <br/>
     {recipe.extendedIngredients.map((item, id) => {
        return <li key={id}>
          <input onChange={handleChange} type="checkbox" value={item.name} name={item.name}/>{item.name}
        </li> 
      })}
      <button type="submit">add to cart</button>
    </form>
  )
}
