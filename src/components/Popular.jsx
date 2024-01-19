import React from 'react'
import "./CSS/Popular.css"
import { Link } from 'react-router-dom'
const Popular = () => {
  return (
    <div className="popular-container">
      <h1>Popular</h1><hr />
      <div className="popular-wrapper">
        <div className="popular-item">
          <Link to={'/men'}>
            <div className="polular-img-container">
            <img loading="lazy" className='popular-img' src="https://source.unsplash.com/random/?leather-boot" alt="" />
            </div>
            <div className="popluar-item-details">
              <p>Men Shoe</p>
              <button className='btn'>Check <i className='fa-solid fa-arrow-right'></i></button>
            </div>
          </Link>
        </div>

        <div className="popular-item">
          <Link to={'/women'}>
            <div className="polular-img-container">
              
            <img loading="lazy" className='popular-img' src="https://source.unsplash.com/random/?heels" alt="" />
          </div>
            <div className="popluar-item-details">
              <p>women Shoe</p>
              <button className='btn'>Check <i className='fa-solid fa-arrow-right'></i></button>
            </div>
          </Link>
        </div>

        <div className="popular-item">
          <Link to={'/kids'}>
            <div className="polular-img-container">
            <img loading="lazy" className='popular-img' src="https://source.unsplash.com/random/?baby-shoe" alt="" />
          </div>
            <div className="popluar-item-details">
              <p>Kids Shoe</p>
              <button className='btn'>Check <i className='fa-solid fa-arrow-right'></i></button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Popular