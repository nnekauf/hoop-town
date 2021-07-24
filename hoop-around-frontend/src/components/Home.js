import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/cube-animation.scss';
import BasketballMatch from "../images/pexels-cottonbro-5275201.mp4"
import Girl from "../images/pexels-cottonbro-6764723.mp4"
import Guy from "../images/pexels-tima-miroshnichenko-5586534.mp4"
import hoop from "../images/production ID_5192077.mp4"


const Home = ({ state, loggedIn }) => {

    return (
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
    )


};
 
const mapStateToProps = state => {
    return ({
      state,
      loggedIn: !!state.currentUser,
      
    })
  }
  
  
  export default connect(mapStateToProps)(Home)