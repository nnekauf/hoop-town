import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import Logout from './Logout'

const NavBar = ({ state, loggedIn }) => {
  
  return (
    <header className="header">
    <div className="NavBar">
      { loggedIn ?
       <>
        {state.currentUser.role} {state.currentUser.first_name}
        <Link className = "navLink" to="/">Home</Link>
        <Link className="navLink" to="/tournaments"> Find Tournaments </Link>
        {/* <Link className="navLink" to="/tournament/saved"> My Saved Games </Link> */}
          { state.currentUser.role === "coach" ? 
            <>
              <Link className="navLink" to="/tournaments/new"> Create Event </Link> 
            </> 
            : 
              null
          }
        <Logout/>
        </>   
      :
        <>
          <Link className = "navLink" to="/">Home</Link>
          <Link className = "navLink" to="/signup">Sign Up</Link> 
                    <br/>
          <Link className = "navLink" to="/login">Log In</Link>
        </>
      }
      <br/>
      
      <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
      </div>
    </div>
    </header>
  )
  }

  const mapStateToProps = state => {
    return ({
      state,
      loggedIn: !!state.currentUser,
      
    })
  }
  
  
  export default connect(mapStateToProps)(NavBar)