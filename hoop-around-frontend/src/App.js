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
    const {loggedIn, tournaments} = this.props
    return (
      <div className="App">
      { loggedIn ? <NavBar location={this.props.location}/> : null }
        <h1 className="mainTitle"> Hoop Around</h1>
        <h2 className= "title" > Street Ball <b>Reinvented</b> </h2>
       
        <Switch>
           <Route exact path='/tournaments' component={Tournaments}/>
           <Route exact path='/login' component={Login}/>
           <Route exact path='/signup' component={Signup}/>
        </Switch>
        
      </div>
    );
  }
}
  const mapStateToProps = state => {
    return ({
      loggedIn: !!state.currentUser,
      tournaments: state.tournaments
    })
  }
export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));



// export default connect(mapStateToProps, {getCurrentUser})(App);

