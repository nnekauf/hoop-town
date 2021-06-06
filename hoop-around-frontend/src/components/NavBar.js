import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'

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
        
            role name
            <NavLink exact activeClassName="active" to="/tournaments" Find Tournaments ></NavLink>
            <NavLink exact activeClassName="active" to="/tournaments"> New Trip </NavLink>
         <Logout/>
  
           
      </div>)
  }
// { loggedIn ? <><p id="loggedin">Logged in as {state.attributes.firstName}</p><Logout/></> : null}
  const mapStateToProps = state => {
    return ({
      state,
      loggedIn: !!state.currentUser,
      
    })
  }
  
  
  export default connect(mapStateToProps)(NavBar)