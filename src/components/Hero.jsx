import React from 'react'
import "./CSS/Hero.css"
const Hero = () => {
    return (
        <div className="Hero-container">
            <div className="hero-wrapper">
                <div className="left-section">
                    <img loading="lazy" className='hero-img' src="https://source.unsplash.com/random/500?shoe" alt="" />
                </div>
                <div className="right-section">
                    <h1 className='herotitle'>New Collection are Available</h1>
                    <p>Discover Stylish shoe arrivals, Quality, Comfort and innovation for your active life </p>
                    <button className='btn'>
                        Explore More
                        <i className='fa-solid fa-arrow-right'></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero