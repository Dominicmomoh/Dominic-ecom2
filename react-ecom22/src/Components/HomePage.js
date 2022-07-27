import React from 'react'
import SimpleSlider from './Slider'

import { Link } from 'react-router-dom'

const homePage = () => {

    return (


        <div className="hero-image">
            <div className="hero-text">
                <div className="hero-container">

                    <h1>Golden Lion Apparel</h1>
                    <h3>For the Forgotten Souls</h3>


                    <div className="button">
                    <Link to="/products"> <li><a href="Products">Shop Now</a></li></Link>                        
                    </div>

                </div>
            </div><br/>
            <SimpleSlider />
        </div>
       
    )

   
}
export default homePage;