import React from 'react'
import {RecipesContext} from '../../contexts/RecipesContext'
import { useHistory } from 'react-router-dom';
// import useSelector and useDispatch from 'react-redux'
import {useDispatch, useSelector} from 'react-redux'

export default function CartList() {

  const cart = useSelector(state => state.cart)
  const history = useHistory();
  console.log(cart)

  const handleHome = () => {
    history.push('/')
  }

  const handleDelete = (id) => {

  }

  return (
    <div className="card">
      <h1>Cart Checkout</h1>
      {cart.map((item, index) => {
        return <li key={index}>{item.name} <button>remove item</button></li>
      })}

      <button onClick={() => handleHome()}>HOME</button>
    </div>
  )
}
