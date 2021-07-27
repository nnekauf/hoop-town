import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import bootstrap from 'bootstrap'
import BasketballMatch from "../images/pexels-cottonbro-5275201.mp4"
import Girl from "../images/pexels-cottonbro-6764723.mp4"
import Guy from "../images/pexels-tima-miroshnichenko-5586534.mp4"
import hoop from "../images/production ID_5192077.mp4"


const Home = ({ state, loggedIn }) => {

    return (
        <>
        <div className = "homePage">
            <h1 className="mainTitle"> Hoop Around</h1>
            <h2 className= "title" > Street Ball <b>Reinvented</b> </h2>
            
            { loggedIn ?
                <>
                    <Link className = "homeButton"  to="/tournaments"> Find Tournaments</Link> 
                        <br/><br/>
                    <Link className = "homeButton"  to="/tournament/saved"> My Saved Games</Link>
                    <br/><br/>
                </> 
                :
                <>
                    <Link className = "homeButton"  to="/signup">Sign Up</Link> 
                    <br/> <br/>
                    <Link className = "homeButton"  to="/login">Log In</Link>
                </>
            }

        </div>
{/* 
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
    </div> */}
        </>
    )


};
 
const mapStateToProps = state => {
    return ({
      state,
      loggedIn: !!state.currentUser,
      
    })
  }
  
  
  export default connect(mapStateToProps)(Home)