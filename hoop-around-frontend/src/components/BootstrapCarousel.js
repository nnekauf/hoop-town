import Carousel from 'react-bootstrap/Carousel'
import React, { Component } from 'react'  
import Girl from "../images/pexels-cottonbro-6764723.mp4"
import Guy from "../images/pexels-tima-miroshnichenko-5586534.mp4"
import hoop from "../images/production ID_5192077.mp4"

const BootstrapCarousel = () => {
  
    return (
      <>

        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src= {Girl} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={Guy} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={hoop} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
    </div>
      </>
    )
    }
  
    
    export default BootstrapCarousel