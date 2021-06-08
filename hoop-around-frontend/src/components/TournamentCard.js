import React from 'react'

import { Link } from 'react-router-dom'
import TournamentShowPage from './TournamentShowPage'

const TournamentCard = ({tournament}) => {

 

  return (
      <div className = "tournamentCard">
        <div id="wrapper">
          <h2> {tournament.name} | </h2>  <h3> {tournament.host}</h3>
        </div>
        {/* <h4> {tournament.date_time}</h4> */}
        <div id="wrapper">
           <h4> {tournament.venue} | </h4> <h4>{tournament.city}</h4>, <h4>{tournament.state}</h4>
        </div>
        <div id="wrapper">
          <h4> # of teams | {tournament.teams.length}</h4> 
        </div>
        <Link className = "homeButton" exact to={`/tournaments/${tournament.id}`}>See More</Link>
       
      </div>
  )  

}

 
  export default TournamentCard