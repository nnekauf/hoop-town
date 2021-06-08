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
// import { Route} from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    // const {tournaments} = this.props
    return (
      <div className="App">
      <NavBar />
      {/* {console.log("hello")}
      {console.log(state.tournaments)} */}
        <Switch>
          <Route exact path='/'component={Home}/>
           <Route exact path='/login' component={Login}/>
           <Route exact path='/signup' component={Signup}/>
           <Route exact path='/tournaments'component={AllTournaments}/>
           <Route exact path='/tournaments/new'component={NewTournamentForm}/>
           <Route exact path='/tournaments/:id'component={TournamentShowPage}/>>
           {/* <Route exact path='/tournaments/:id' render ={tournaments => {
           const tournament = tournaments.map(t => t.id === tournaments.match.params.id)
           console.log(tournaments)
           }}  /> */}

           {/* <Route exact path='/tournaments/:id'render={state => {
              
              const t = state.tournaments.find(t => t.id === params.id)
              console.log(t)
              return <TournamentShowPage tournament={t} {...state}/> } 
              }/> */}
           
           {/* <Route exact path='/tournaments/map'component={TournamentsMap}/>
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
      tournaments: state.tournaments
    })
  }
export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));



// export default connect(mapStateToProps, {getCurrentUser})(App);

