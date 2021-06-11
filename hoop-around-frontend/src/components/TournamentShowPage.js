import React from 'react'

import { Link } from 'react-router-dom'
import { getAllTournaments } from '../actions/tournaments'
import AllTournaments from './AllTournaments'


const TournamentShowPage = ({tournament}) => {
 
  function getTournament(array) {
    return array.find(t=> t.id ===1)
    
    
  }

  return (
      <div > <br/> <br/>
        tournament show page
        {tournament.name}
         <h2> {tournament.name}</h2> <h3> {tournament.host}</h3>
        <h4> {tournament.date_time}</h4>
        <h4> {tournament.venue}</h4>| <h4>{tournament.city}</h4>, <h4>{tournament.state}</h4>
        <br/>
        <h4> # of teams | {tournament.teams.length}</h4>  
        <h4> {tournament.about}</h4>
       
      </div>
  )  

}

 
  export default TournamentShowPage



   