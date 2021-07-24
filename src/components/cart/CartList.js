import React from 'react'
import {RecipesContext} from '../../contexts/RecipesContext'
import { useHistory } from 'react-router-dom';
import {remove} from '../../actions/action';
// import useSelector and useDispatch from 'react-redux'
import {useDispatch, useSelector} from 'react-redux'

export default function CartList() {

  const cart = useSelector(state => state.cart)
  const history = useHistory();
  const dispatch = useDispatch()
  console.log(cart)

  const handleHome = () => {
    history.push('/')
  }

  const handleDelete = (item) => {
    dispatch(remove(item))
  }

  return (
    <div className="card">
      <h1>Cart Checkout</h1>
      {cart.map((item, index) => {
        return <li key={index}>{item.name} <button className="button" onClick={() => handleDelete(item)}>remove item</button></li>
      })}

      <button className="button" onClick={() => handleHome()}>HOME</button>
    </div>
  )
}
