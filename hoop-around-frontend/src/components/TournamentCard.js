import React from 'react'

import { Link } from 'react-router-dom'

const TournamentCard = ({tournament}) => {

    

  return (
      <div className = "tournamentCard">
        <h2> {tournament.name}</h2> <h3> {tournament.host}</h3>
        <h4> {tournament.date_time}</h4>
        <h4> {tournament.venue}</h4>| <h4>{tournament.city}</h4>, <h4>{tournament.state}</h4>
        <br/>
        <h4> # of teams | {tournament.teams.length}</h4>  
      </div>
  )  

}

 
  export default TournamentCard