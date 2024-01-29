import React from 'react';
import "./CSS/Hero.css"
// import "./CSS/test.css";
const Hero = () =>
{
  return (
    <div className="Hero-container">
      <div className="hero-wrapper">
        <div className="left-section">
          <img loading="lazy" className='hero-img' src="https://img.freepik.com/free-photo/blue-sports-shoe-untied-ready-action-generated-by-ai_188544-25546.jpg?t=st=1706457113~exp=1706460713~hmac=308904585ab7696b6b0bceedc5aad3d37530e15c76b4fa696c5a9e08d6ca3ee6&w=826" alt="" />
        </div>
        <div className="right-section">
          <h1 className='herotitle'>New Collection <br /> are Available</h1>
          <p>Discover Stylish shoe arrivals, Quality, Comfort and innovation for your active life </p>
          {/* <button className='btn'>
            Explore More
            <i className='fa-solid fa-arrow-right'></i>
          </button> */}
        </div>
      </div>
    </div>
  )
};

export default Hero;
