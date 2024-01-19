import React, { lazy } from 'react'
import "./CSS/Cart.css"
const CartItems = lazy(()=>import('../components/CartItems'))
const Cart = () => {
  return (
    <div className='Cart'>
      <CartItems />
    </div>
  )
}

export default Cart