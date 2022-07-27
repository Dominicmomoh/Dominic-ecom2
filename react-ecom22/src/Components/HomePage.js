import React from 'react'
import SimpleSlider from './Slider'
// import SimpleSlider from './Slider'
// import SimpleImageSlider from 'react-simple-image-slider'
// import Slider from './Slider'

const homePage = () => {

    return (


        <div className="hero-image">
            <div className="hero-text">
                <div className="hero-container">

                    <h1>Golden Lion Apparel</h1>
                    <h3>For the Forgotten Souls</h3>


                    <div className="button">
                        <a href="shop.html">Shop Now</a>
                    </div>

                </div>
            </div><br/>
            <SimpleSlider />
        </div>
       
    )

   
}
export default homePage;