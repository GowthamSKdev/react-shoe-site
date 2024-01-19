import React, { lazy } from 'react'
import "./CSS/LoginSignup.css"
const LoginSignup = () => {
  return (
    <>
      {/* Signup */}
      <div className="signup-container">
        <div className="su-left-wrapper">
          <img className='img' src="https://source.unsplash.com/random/500*500/?shoe" alt="" />
        </div>
        <div className="su-right-wrapper">
          <h1>Login</h1>
          <div className="form">
            <input type="text" id='Sign-name' className='input' placeholder='Enter Name Or Userid' />
            <input type="email" className='input' name="" id="Sign-email" placeholder='Enter EmailID' />
            <input type="password" className='input' name="" id="Sign-password" placeholder='Password' />
            <button type="submit" className='loginbtn btn'>Register</button>
            <p>Already you have account?</p>
            <a href="" className="loginbtn btn" >Continue Google</a>
            <a href="" className='loginbtn btn'>Login</a>
          </div>

        </div>
      </div>

      {/* login   */}
      <div className="login-container">

      </div>
    </>
  )
}

export default LoginSignup