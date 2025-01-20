import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <h2 style={{color: "orangered"}}>FLAVOR!</h2>
                <p>Flavorse is about redefining dining with a fusion of global flavors. Whether it's Moroccan, Italian, or Asian, Flavorse is your go-to spot in Rabat. Visit us today and explore a world where taste meets variety!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+880 1843080401</li>
                    <li>contact@flavor.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>
            Copyright 2025 © FLAVOR! - All Right Reserved
        </p>
    </div>
  )
}

export default Footer