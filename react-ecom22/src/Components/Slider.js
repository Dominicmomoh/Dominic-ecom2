import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const images = [
    {
        url: "./slider-images/Projectimg16.jpeg",
        name: "Photo 1"
    },
    {
        url: "./slider-images/Projectimg17.webp",
        name: "Photo 2"
    },
    {
        url: "./slider-images/Projectimg19.webp",
        name: "Photo 3"
    },
    {
        url: "./slider-images/Projectimg20.webp",
        name: "Photo 4"
    },
];

export default function SimpleSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        className: "slides",
        autoplay: true

    };
    return (
        <div className="App2"  >
            <Slider {...settings}>
                {images.map((image) => {
                    return (
                        <img width="40px" src={image.url} alt="" />
                    )
                })}
             
            </Slider>
        </ div>
    );
}