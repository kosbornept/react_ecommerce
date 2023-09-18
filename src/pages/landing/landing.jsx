import React from 'react'
import { useNavigate } from 'react-router-dom'
import './landing.css';

export const Landing = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div className='landing'>
            <h1 className='landing__title'>Welcome to an Example E-commerce Site</h1>
            <h2 className='landing__subtitle'>Built using <span style={{color: 'lightskyblue'}}>React</span> and <span style={{color: 'lightcoral'}}>Vite</span></h2>
            <button className='landing__btn bg-pan-left' onClick={() => navigate("/shop")}>Enter Site</button>
        </div>
    </div>
  )
}
