import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import Logout from './Logout'

const NavBar = ({ state, loggedIn }) => {
  
  return (
    
    <div className="NavBar" >
      😀
      { loggedIn ?
       <>
        {state.currentUser.role} {state.currentUser.first_name}
        <ul>
          <li><Link className = "navLink" to="/">Home</Link></li>
          <li><Link className="navLink" to="/tournaments"> Find Tournaments </Link></li>
          {/* <li><Link className="navLink" to="/tournament/saved"> My Saved Games </Link> </li>*/}
          { state.currentUser.role === "coach" ?   
              <li><Link className="navLink" to="/tournaments/new"> Create Event </Link></li> 
            : 
              null
          }
          <li><Logout/></li>          
        </ul>

        </>   
      :
        <ul>
          <li><Link className = "navLink" to="/">Home</Link></li>
          <li><Link className = "navLink" to="/signup">Sign Up</Link> </li>
                    <br/>
          <li><Link className = "navLink" to="/login">Log In</Link></li>
        </ul>
      }
      <br/>
      
    
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