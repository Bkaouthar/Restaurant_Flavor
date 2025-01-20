import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about-section" id='about'>
            <div className="left-side">
                <img src="https://media.giphy.com/media/kgUoG0kpDycjIRk3Af/giphy.gif" alt="Delivery Man Cycling" />
            </div>
            <div className="right-side">
                <h2>Welcome to Flavors!</h2>
                <p>At Flavor, we're passionate about bringing delicious food right to your doorstep. Whether you're craving your favorite comfort food, exploring new flavors, or simply seeking convenience, we've got you covered.</p>
                <p>From savory pizzas and burgers to fresh salads and sushi, there's something for every palate.</p>
                <p>Our dedicated team of delivery professionals ensures that your orders are delivered promptly and with care, so you can enjoy your meal hot and fresh every time.</p>
                
            </div>
        </div>
  )
}

export default About