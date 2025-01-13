// rafce
import React from 'react'
import laylo from "../../assets/girl.jpg"
import "./Hero.scss"

const Hero = () => {
  let price = 1565  
  return (
    <div className='hero'>
        <h2>Hero </h2>
        <h1>{price.brm()}</h1>
        <img src={laylo} alt="" />
    </div>
  )
}

export default Hero