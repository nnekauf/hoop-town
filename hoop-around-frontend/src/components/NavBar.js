import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import Logout from './Logout'
import Login from './Login'
import Signup from './Signup'

const NavBar = ({ state, loggedIn }) => {
  
  return (
       
    <div className="NavBar">
      { loggedIn ?
       <>
        {state.currentUser.role} {state.currentUser.first_name}
        <Link className="navLink" to="/tournaments"> Find Tournaments </Link>
        <Link className="navLink" to="/mygames"> My Games </Link>
        <Link className="navLink" to="/myprofile"> Profile </Link>
          { state.currentUser.role === "coach" ? 
            <>
              <Link className="navLink" to="/event/new"> Create Event </Link> 
            </> 
            : 
              null
          }
        <Logout/>
        </>   
      :
        <>
          <Link className = "navLink" to="/signup">Sign Up</Link> 
                    <br/>
          <Link className = "navLink" to="/login">Log In</Link>
        </>
      }
    </div>
  )
  }

  const mapStateToProps = state => {
    return ({
      state,
      loggedIn: !!state.currentUser,
      
    })
  }
  
  
  export default connect(mapStateToProps)(NavBar)