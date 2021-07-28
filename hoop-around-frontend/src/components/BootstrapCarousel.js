
import React, { Component } from 'react'  
import Players from "../images/carousel_2.mp4"
import hoop from "../images/carousel_3.mp4"
import team from "../images/carousel_1.mp4"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const BootstrapCarousel = () => {
  
    return (
      <div className="carousel-wrapper">
            <Carousel>
                <div>
                    <img src={team} />
                </div>
                <div>
                    <img src={Players} />
                </div>
                <div>
                    <img src={hoop} />
                </div>
            </Carousel>
        </div>
    )
    }
  
    
    export default BootstrapCarousel