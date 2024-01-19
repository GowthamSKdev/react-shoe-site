import React, { useState } from 'react'
import "./CSS/Navbar.css"
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menu, setmenu] = useState(false);
  const togglemenu = () => {
    setmenu((prevmenu) => !prevmenu);
  };
  return (
    <>
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/" className="logo">Shoe Site</Link>
          <div className="nav-item">
            <Link to="/" className='nav-link'>Shop</Link>
            <Link to="/men" className='nav-link'>Men</Link>
            <Link to="/women" className='nav-link'>Women</Link>
            <Link to="/kids" className='nav-link'>Kids</Link>
          </div>
          <div className="login">
            
              <Link to={'/cart'} className="cart">

                <i className="fa-solid fa-cart-shopping"></i>
                <div className="right-text">
                  Cart
                </div>
              </Link>
            
            <Link to="/login" className="login-btn">
              <i className="fa-regular fa-user"></i>
              <div className="right-text">
                Login
              </div>
            </Link>
            <Link className='bar' onClick={togglemenu}>
              <i className='fa-solid fa-bars'></i>
            </Link>
          </div>
        </div>
      </div>
      
      {menu && (
        <div className="side-menu">
          <div className="side-menu-top">
            <a href="/" className="side-logo">Shoe Site</a>
            <i className='fa-solid fa-xmark' onClick={togglemenu}></i>
          </div>
          <div className="side-menu-items">
            <Link to="/" className='side-nav-link'>Shop</Link>
            <Link to="/men" className='side-nav-link'>Men</Link>
            <Link to="/women" className='side-nav-link'>Women</Link>
            <Link to="/kids" className='side-nav-link'>Kids</Link>
          </div>
          <div className="side-menu-items">
            <div className="side-nav-link">
              <Link to="/cart" className='cart'>
                <i className='fa-solid fa-cart-shopping'></i>
                Cart
              </Link>
            </div>
            {/* <a> */}
            <div className="side-nav-link">
              <Link to="/login" className="login-btn">
                <i className='fa-solid fa-user'></i>
                Login
              </Link>
            </div>
            {/* </a> */}
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar