import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router-dom';

class TournamentShowPage extends React.Component{
  constructor(props) {
    super(props);
    // this.state = {
    //    tournaments: props.tournaments
    // }
    // console.log(state.tournaments)
}


// const TournamentShowPage = ({t}) => {

    render () {
      // let tournaments = this.props.tournaments
      //  const t = tournaments.find(t => t.id === this.props.match.params.id)
      return (
      <div className = "tournamentShowPage">
          <h2> {this.props.tournaments}</h2>
        {/* <h2> {tournament.name}</h2> <h3> {tournament.host}</h3>
        <h4> {tournament.date_time}</h4>
        <h4> {tournament.venue}</h4>| <h4>{tournament.city}</h4>, <h4>{tournament.state}</h4>
        <br/>
        <h4> # of teams | {tournament.teams.length}</h4>  
        <h4> {tournament.about}</h4> */}
      </div>
  ) 
    }

  }  

// }



export default TournamentShowPage
   