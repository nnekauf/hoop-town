import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const Home = ({ state, loggedIn }) => {
    
    return (
        <div className = "homePage">
            { loggedIn ?
                <>
                    <Link className = "homeButton" to="/tournaments"> Find Tournaments</Link> 
                        <br/>
                    <Link className = "homeButton" to="/mygames"> My Games</Link>
                    <br/>
                    <Link className = "homeButton" to="/myprofile"> Profile</Link>
                </> 
                :
                <>
                    <Link className = "homeButton" to="/signup">Sign Up</Link> 
                    <br/>
                    <Link className = "homeButton" to="/login">Log In</Link>
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