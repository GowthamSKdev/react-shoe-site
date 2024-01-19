import React from 'react'
import './CSS/CartItems.css'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'


const CartItems = () => {
    const { all_shoes, cartItems, removeFromCart } = useContext(ShopContext);
    const TotalAmount = 0;

    const totalQuantity = Object.values(cartItems).reduce((acc, quantity) => acc + quantity, 0);
    const totalPrice = all_shoes.reduce((acc, shoe) => {
        if (cartItems[shoe.id] > 0) {
            return acc + shoe.new_price * cartItems[shoe.id];
        }
        return acc;
    }, 0);

    return (
        <div className='CartItems'>
            <div className="cartitems-main-part">
                <p>Product</p>
                <p>Quantity</p>
                <p>Price</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_shoes.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div className="cartitems-main-part cartitem-format">
                        <div className='productDetails'>
                            <img src={e.image} alt="" className='carticon-producticon' />
                            <p>Name : {e.name}</p>
                            <p>Price : ${e.new_price}</p>
                        </div>
                        <button className='cartitem-quantity btn'>{cartItems[e.id]}</button>
                        <p>${e.new_price * cartItems[e.id]}</p>
                        <img src="" alt="" onClick={() => { removeFromCart() }} className='fa-solid fa-xmark' />
                    </div>
                }
            })}
            <hr />
            <div className="pay-container">
                <p>Total Cart Item count : {totalQuantity}</p>
                <p>Total Cart Price : ${totalPrice}
                </p>
                <button type='submit' className='btn' > Pay  ${totalPrice}</button>
            </div>
        </div>
    )
}

export default CartItems