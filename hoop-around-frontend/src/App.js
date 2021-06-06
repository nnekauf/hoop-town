import React from 'react'
import './App.css'
import {connect} from 'react-redux'
import {getCurrentUser} from "./actions/currentUser"
import NavBar from "./components/NavBar"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Tournaments from "./components/Tournaments"
import { Route, Switch, withRouter } from 'react-router-dom'
// import { Route} from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    return (
      <div>
        <h1 className="mainTitle"> Hoop Around</h1>
        <h2 className= "title" > Street Ball <b>Reinvented</b> </h2>
        {/* <NavBar/>  */}
      
         <Route exact path='/tournaments' component={Tournaments}/>
          
       
      </div>
    );
  }

}
export default connect(null, {getCurrentUser})(App);

// const mapStateToProps = state => {
//   return ({
//     loggedIn: !!state.currentUser,
    
//   })
// }

// export default connect(mapStateToProps, {getCurrentUser})(App);

{/* <slideshow with video here/>
          {this.props.loggedIn ? 
            <>
              <Profile/>
              <Switch>
                <Route exact path='/tournaments' component={Tournaments}/>
              </Switch>
              
              <Tournaments/>
              <Logout/> 
            </>
              :
            <>
              <Login/>
              <Signup/>
              <Tour/>
            </>
          }
          
          <NavBar/> */}