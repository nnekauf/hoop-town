import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'
import Login from './Login'
import Signup from './Signup'

const NavBar = ({ state, loggedIn }) => {
  // { if (loggedIn) { 
  //   return (
  //     <div className="NavBar">
      
  //         {state.currentUser.role} {state.currentUser.first_name}
  //         <NavLink exact activeClassName="active" to="/tournaments" Find Tournaments ></NavLink>
  //         <NavLink exact activeClassName="active" to="/tournaments"> New Trip </NavLink>
  //      <Logout/>

  //       )  
  //   </div>)

  //  } else {
  //     return (
  //       <div className="NavBar">
  //           <NavLink exact activeClassName="active" to="/loogin" >New Trip</NavLink>
  //       </div>
  //     )
  //   }
  return (
       
    <div className="NavBar">
      { loggedIn ?
       <>
        {state.currentUser.role} {state.currentUser.first_name}
        <NavLink exact activeClassName="active" to="/tournaments"> Find Tournaments </NavLink>
        <NavLink exact activeClassName="active" to="/tournaments"> My Games </NavLink>
        <NavLink exact activeClassName="active" to="/tournaments"> Profile </NavLink>
        <NavLink exact activeClassName="active" to="/tournaments"> Create Event </NavLink>
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
// { loggedIn ? <><p id="loggedin">Logged in as {state.attributes.firstName}</p><Logout/></> : null}
  const mapStateToProps = state => {
    return ({
      state,
      loggedIn: !!state.currentUser,
      
    })
  }
  
  
  export default connect(mapStateToProps)(NavBar)