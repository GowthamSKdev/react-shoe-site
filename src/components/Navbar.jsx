import React, { useState } from 'react';
import "./CSS/Navbar.css";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () =>
{
  const [ menu, setmenu ] = useState( false );
  const togglemenu = () =>
  {
    setmenu( ( prevmenu ) => !prevmenu );
  };
  return (
    <>
      <div className="container">
        <div className="nav-wrapper">
          <div className="nav-item">
            {/* <NavLink to="/" className='nav-link'>Shop</NavLink> */}
            <NavLink to="/men" className='nav-link'>Men</NavLink>
            <NavLink to="/women" className='nav-link'>Women</NavLink>
            <NavLink to="/kids" className='nav-link'>Kids</NavLink>
          </div>
          {/* "Logo" */}
          <NavLink to="/" className="logo">Shoe Site</NavLink>
          {/* "Login" */}
          <div className="login">
            <NavLink to={'/cart'} className="cart">
              <i className="fa-solid fa-cart-shopping"></i>
              <div className="right-text">
                Cart
              </div>
            </NavLink>
            <NavLink to="/login" className="login-btn">
              <i className="fa-regular fa-user"></i>
              <div className="right-text">
                Login
              </div>
            </NavLink>
            <NavLink className='bar' onClick={togglemenu}>
              <i className='fa-solid fa-bars'></i>
            </NavLink>
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
            {/* <NavLink to="/" className='side-nav-link'>Shop</NavLink> */}
            <NavLink to="/men" className='side-nav-link'>Men</NavLink>
            <NavLink to="/women" className='side-nav-link'>Women</NavLink>
            <NavLink to="/kids" className='side-nav-link'>Kids</NavLink>
          </div>
          <div className="side-menu-items">
            <div className="side-nav-link">
              <NavLink to="/cart" className='cart'>
                <i className='fa-solid fa-cart-shopping'></i>
                Cart
              </NavLink>
            </div>
            {/* <a> */}
            <div className="side-nav-link">
              <NavLink to="/login" className="login-btn">
                <i className='fa-solid fa-user'></i>
                Login
              </NavLink>
            </div>
            {/* </a> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
