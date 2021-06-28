import React from 'react'
import { useHistory } from "react-router-dom";

const TournamentCard = ({tournament}) => {

  const history = useHistory()

  const handleClick = () => {
      let path = `/tournaments/${tournament.id}`; 
       history.push(path);
  }
 

  return (
    <div className = "tournamentCard" a href={`/tournaments/${tournament.id}`} onClick ={handleClick}>

      <div className = "tournamentTitle">
        <div id="wrapper">
          <div className = "tournementName"> <h2> {tournament.name} | </h2> </div>
          <div className = "tournamentHost"> <h3> {tournament.host}</h3> </div>
        </div>
      </div>

      <div className = "tournamentInfo">
        <div id="wrapper">
          <div className = "tournamentDateTime"> <h4> {tournament.date_time}</h4> </div>
        </div>
        <div className = "tournamentLocation">
          <div id="wrapper">
              <h4> {tournament.venue} | </h4> <h4>{tournament.city}</h4>, <h4>{tournament.state}</h4>
          </div>
         </div>
      </div>
          
      <div className = "tournamentCount">
        <div id="wrapper">
            <h4> # of teams | {tournament.teams.length}</h4> 
        </div>
      </div>  
        
         
        
        
        
       
    </div>
  )  

}

 
  export default TournamentCard