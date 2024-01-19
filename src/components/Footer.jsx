import React from 'react'
import './CSS/Footer.css'
const Footer = () => {
  return (
    <div className='Footer'>
          <div className="footer-logo">Shoe Site</div>
          <p className="discription">
              "Your go-to destination for trendy, quality fashion and accessories."
          </p>
          <div className="footer-nav">
              <a href="/">Shop</a>
              <a href="/men">Men</a>
              <a href="/women">Women</a>
              <a href="/kids">Kids</a>
          </div>
          <div className="NewsLetter">
              <h1>NEWS Letter</h1>
              <form action="" className='Form'>
                  <input type="email" name="" id="" placeholder='Email' className='input'/>
                  <button type="submit" className='btn'>Subscribe</button>
              </form>
          </div>
          {/* <div className="copyright">shoesite@2024</div> */}
    </div>
  )
}

export default Footer