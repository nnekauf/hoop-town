import React from 'react'

import { Link } from 'react-router-dom'
import { getAllTournaments } from '../actions/tournaments'
import AllTournaments from './AllTournaments'


const TournamentShowPage = ({tournament}) => {
 
  function getTournament(array) {
    return array.find(t=> t.id ===1)
    
    
  }

  return (
      <div className="tournamentShowPage"> <br/> <br/>
        
      
        <h2> {tournament.name} TOURNAMENT</h2> <h3> HOSTED BY: {tournament.host}</h3>
        <br/>
        <h4>LOCATION: {tournament.venue} {tournament.city}, {tournament.state} {tournament.zipcode}</h4>
        
        <h4>TIME: {tournament.date_time}</h4>
        
        
        <br/>
         
        <h4> ABOUT THIS TOURNAMENT</h4>
        <p> {tournament.about}</p>
        <h4> # of teams | {tournament.teams.length}</h4> 
      </div>
  )  

}

 
  export default TournamentShowPage



   