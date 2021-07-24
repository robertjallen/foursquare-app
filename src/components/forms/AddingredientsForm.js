import React, {useState, useContext} from 'react'
import {post} from '../../actions/action';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';


export default function AddingredientsForm({recipe, visible, setVisible}) {

  
  let [newItems, setNewItems] = useState([])
  const [value, setValue] = useState('')
  const propertyValues = Object.values(newItems);

  const dispatch = useDispatch()
  const history = useHistory();

  const handleChange = (item) => {
   // update state with each keystroke
  //  let newValue = {[e.target.name]: e.target.value}
   setNewItems([...newItems, item]);
   console.log(newItems);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // dispatch(post(propertyValues))
    // resetForm()
    
    console.log(newItems)
    dispatch(post(newItems))
    history.push('/cart')
  }

  const resetForm = () => {
    setVisible("hidden")
  };

  return (
    <form onSubmit={handleSubmit} className={visible ? "hidden" : "visible"}>
     modal
     {recipe.id}
     <br/>
     {recipe.extendedIngredients.map((item, id) => {
        return <li className="list-item" key={id}>
                  <p>{item.name}</p>
                  <p onClick={() => handleChange(item)} value={item} name="value">X</p>
              </li> 
      })}
      <button type="submit">add to cart</button>
    </form>
  )
}
