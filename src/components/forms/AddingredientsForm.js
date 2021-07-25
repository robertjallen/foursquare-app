import React, {useState} from 'react'
import {post} from '../../actions/action';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';


export default function AddingredientsForm({recipe}) {
  
  let [newItems, setNewItems] = useState([])
  const dispatch = useDispatch()
  const history = useHistory();

  const handleChange = (item) => {
   setNewItems([...newItems, item]);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(newItems)
    dispatch(post(newItems))
    history.push('/cart')
  }


  return (
    <form onSubmit={handleSubmit} >
     <hr/>
     {recipe.extendedIngredients.map((item, id) => {
        return <li className='ingredient' key={id}>
                  <p>{item.name}</p>
                  <input type="checkbox" onClick={() => handleChange(item)} value="+" name="value"/>
              </li> 
      })}
      <hr/>
      <button className="button" type="submit">add to cart</button>
    </form>
  )
}
