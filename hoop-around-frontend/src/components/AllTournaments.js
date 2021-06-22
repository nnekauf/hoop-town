import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import TournamentCard from './TournamentCard'
const AllTournaments = state => {



  return (
    <div className= "allTournaments">
    <br/>
      { state.tournaments.length>0 ?
        <>
          {state.tournaments.map(t => (<TournamentCard tournament = {t}/>))}
        </>
        :
        <>
          No Tournaments Available
        </>
      }
    </div>
  )
}

  const mapStateToProps = state => {
    return {
      tournaments: state.tournaments
    }
  }
  export default connect(mapStateToProps)(AllTournaments)
