import React from 'react'
import './CSS/Offer.css'
const Offer = () => {
  return (
      <>
          <div className="offer">
            <div className="left-container">
              <h1 className='offer-headline'>New Arrivel Sniker shoe's</h1>
              <p>Many collection and color's available</p>
              <button className="btn">checkout <i className='fa-solid fa-arrow-right'></i></button>
            </div>
            <div className="right-container">
              <h1 className='off'>20% <br /> OFF</h1>
              <img loading="lazy" className='offer-img' src="https://source.unsplash.com/random/600*200/?sniker" alt="" />
            </div>
          </div>
      </>
  )
}

export default Offer