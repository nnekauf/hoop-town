import React from 'react'

import { Link } from 'react-router-dom'

const TournamentCard = ({tournament}) => {

    

  return (
      <>
        <h3> {tournament.name}</h3>
        <h3> {tournament.venue}</h3>
      </>
  )  

}

 
  export default TournamentCard