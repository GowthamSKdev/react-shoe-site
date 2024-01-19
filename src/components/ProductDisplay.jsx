import React, { lazy, useContext } from 'react'
import './CSS/ProductDisplay.css'
import { ShopContext } from '../context/ShopContext';
const Item = lazy(()=>import('./Item'))

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    return (
      <>
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img loading='lazy' src={product.image} alt="" />
                <img loading='lazy' src={product.image} alt="" />
                <img loading='lazy' src={product.image} alt="" />
                <img loading='lazy' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
              <h1>{product.name}</h1>
              <div className="productdisplay-right-star">
                  <i className='fa-solid fa-star'></i>
                  <i className='fa-solid fa-star'></i>
                  <i className='fa-solid fa-star'></i>
                  <i className='fa-solid fa-star'></i>
                  <i className='fa-solid fa-star'></i>
                  <p>(122)</p>
              </div>
              <div className="productdisplay-right-prices">
                  <div className="productdisplay-right-old-price">
                      ${product.old_price}
                  </div>
                  <div className="productdisplay-right-new-price">
                      ${product.new_price}
                  </div>
              </div>
              <div className="productdisplay-right-discription">
              Introducing our sleek and comfortable Apex Runner Sneakers, the perfect blend of style and performance. Engineered with cutting-edge technology, these shoes provide exceptional support and cushioning for an unparalleled walking or running experience. Elevate your stride with a modern design that effortlessly complements your active lifestyle. Step into excellence with Apex Runner Sneakers.
              </div>
              <div className="productdisplay-right-size">
                  <div className='size'>6</div>
                  <div className='size'>7</div>
                  <div className='size'>8</div>
                  <div className='size'>9</div>
                  <div className='size'>10</div>
                  <div className='size'>11</div>
              </div>
              <div className="cart-buy">    
              <button className='btn' onClick={()=>{addToCart(product.id)}}><i className='fa-solid fa-cart-shopping'></i>Add to Cart</button>
              <button className='btn'><i className='fa-solid fa-bag-shopping'></i>Buy</button>
              </div>
          </div>
            </div>
            
      </>
  )
}

export default ProductDisplay