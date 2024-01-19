import React from 'react'
import "./Breadcrum.css"
const Breadcrum = (props) => {
    const { product } = props;
  return (
      <div className='breadcrum'>
          Home <i className='fa-solid fa-arrow-right'></i>Shop<i className='fa-solid fa-arrow-right'></i><a href={`/${product.catagory}`}>{product.catagory}</a>
          <i className='fa-solid fa-arrow-right'></i>{product.name}
      </div>
  )
}

export default Breadcrum