import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const Home = ({ state, loggedIn }) => {
    
    return (
        <div className = "homePage">
            <h1 className="mainTitle"> Hoop Around</h1>
            <h2 className= "title" > Street Ball <b>Reinvented</b> </h2>
            
            { loggedIn ?
                <>
                    <Link className = "homeButton" exact to="/tournaments"> Find Tournaments</Link> 
                        <br/>
                    <Link className = "homeButton" exact to="/mygames"> My Games</Link>
                    <br/>
                    <Link className = "homeButton" exact to="/myprofile"> Profile</Link>
                </> 
                :
                <>
                    <Link className = "homeButton" exact to="/signup">Sign Up</Link> 
                    <br/>
                    <Link className = "homeButton" exact to="/login">Log In</Link>
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