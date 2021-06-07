import React from 'react'
import './App.css'
import {connect} from 'react-redux'
import {getCurrentUser} from "./actions/currentUser"
import NavBar from "./components/NavBar"
import Home from './components/Home.js'
import Login from "./components/Login"
import Signup from "./components/Signup"
import AllTournaments from "./components/AllTournaments"
import CreateTournament from "./components/CreateTournament"
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
      <NavBar />
      
        <Switch>
          <Route exact path='/'component={Home}/>
           <Route exact path='/login' component={Login}/>
           <Route exact path='/signup' component={Signup}/>
           <Route exact path='/tournaments'component={AllTournaments}/>
           <Route exact path='/tournaments/new'component={CreateTournament}/>
           {/* <Route exact path='/tournaments/map'component={TournamentsMap}/>
           <Route exact path='/my-tournaments'component={MyTournaments}/>
           <Route exact path='/tournaments/:id'component={TournamentCard}/>
           
           <Route exact path='/tournaments/:id/register'component={TournamentRegistration}/>
           <Route exact path='/my-profile'component={Profile}/>
           <Route exact path='/about/who-we-are'component={About1}/>
           <Route exact path='/about/what-we-do'component={About2}/>
           <Route exact path='/about/join'component={About3}/>  */}
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

