import React, { lazy } from 'react'
import "./CSS/Shop.css"

const Hero = lazy(() => import('../components/Hero'))
const Populars = lazy(() => import('../components/Popular'))
const Offers = lazy(() => import('../components/Offer'))

const Shop = () => {
  return (
    <>
      <div className="Shop-container">
        <Hero />
        <Populars />
        <Offers/>
      </div>
    </>
  )
}

export default Shop