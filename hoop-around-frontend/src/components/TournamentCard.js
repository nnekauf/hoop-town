import React from 'react'

import { Link } from 'react-router-dom'

const TournamentCard = ({tournament}) => {

    

  return (
      <>
      tournament ?
      <>
        <h3> {tournament.name}</h3>
        <h3> {tournament.date_time}</h3>
      </> :
      <p> No Tournaments</p>
      </>
  )  

}

 
  export default TournamentCard