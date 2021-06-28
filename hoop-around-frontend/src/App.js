import React from 'react'
import './App.css'
import {connect} from 'react-redux'
import {getCurrentUser} from "./actions/currentUser"

import NavBar from "./components/NavBar"
import Home from './components/Home.js'
import Login from "./components/Login"
import Signup from "./components/Signup"
import AllTournaments from "./components/AllTournaments"
import NewTournamentForm from "./components/NewTournamentForm"
import { Route, Switch, withRouter } from 'react-router-dom'
import TournamentShowPage from './components/TournamentShowPage'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  renderTournament = (props) => {
    let id = parseInt(props.match.params.id)
    let t = this.props.tournaments.find(t => t.id === id)
    console.log(t)
    return(t ? <TournamentShowPage tournament={t}/> : <> Not found </>)
  }



  render(){

    return (
      <div className="App">

      <NavBar />
      
        <Switch>
          <Route exact path='/'component={Home}/>
           <Route exact path='/login' component={Login}/>
           <Route exact path='/signup' component={Signup}/>
           {this.props.loggedIn ? <Route exact path='/tournaments'component={AllTournaments}/> : <Login/>}
           {this.props.loggedIn ? <Route exact path='/tournaments/new'component={NewTournamentForm}/> : <Login/>}
           {this.props.loggedIn ? <Route exact path='/tournaments/:id'render={ this.renderTournament}/> : <Login/>}

           {/*
           <Route exact path='/tournaments/map'component={TournamentsMap}/>
           <Route exact path='/my-tournaments'component={MyTournaments}/>
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
      tournaments: state.tournaments,
      currentUser: state.currentUser
    })
  }
export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));




