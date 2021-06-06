import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'
import Login from './Login'
import Signup from './Signup'

const NavBar = ({ state, loggedIn }) => {
  
  return (
       
    <div className="NavBar">
      { loggedIn ?
       <>
        {state.currentUser.role} {state.currentUser.first_name}
        <NavLink exact activeClassName="active" to="/tournaments"> Find Tournaments </NavLink>
        <NavLink exact activeClassName="active" to="/mygames"> My Games </NavLink>
        <NavLink exact activeClassName="active" to="/myprofile"> Profile </NavLink>
          { state.currentUser.role === "coach" ? 
            <>
              <NavLink exact activeClassName="active" to="/event/new"> Create Event </NavLink> 
            </> 
            : 
              null
          }
        <Logout/>
        </>   
      :
        <>
          <Login/>
          <Signup/>
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