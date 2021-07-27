import Carousel from 'react-bootstrap/Carousel'
import React, { Component } from 'react'  
import Players from "../images/carousel_2.mp4"
import hoop from "../images/carousel_3.mp4"
import team from "../images/carousel_1.mp4"

const BootstrapCarousel = () => {
  
    return (
      <>
        <Carousel>
        <Carousel.Item>
            <video
            className="carousel"
            type="video/mp4"
            src={team}
            loop autoPlay muted

            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <video
            className="carousel"
            type="video/mp4"
            src={Players}
            loop autoPlay muted
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <video
            className="carousel"
            type="video/mp4"
            src={hoop}
            loop autoPlay muted
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        
        </Carousel>
      </>
    )
    }
  
    
    export default BootstrapCarousel