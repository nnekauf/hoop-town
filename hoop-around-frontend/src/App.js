import React from 'react'
import './App.css'
import Login from "./components/Login"
import Logout from "./components/Logout"
import Signup from "./components/Signup"
import {connect} from 'react-redux'
import {getCurrentUser} from "./actions/currentUser"

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    return (
      <div className="App">
       {this.props.loggedIn ? <Logout/> :
        <Login/>}
        <Signup/>
        <Nav/>
      </div>
    );
    }

}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    
  })
}

export default connect(mapStateToProps, {getCurrentUser})(App);
