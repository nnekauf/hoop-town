import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const AllTournaments = props => {

    const tournamentCard = props.tournaments.length >0 ?
    props.tournaments.map(t => (<p key={t.id}><Link to={`/tournaments/${t.id}`}>{t.name}</Link></p>)) :
    null

  return tournamentCard
    
  }

  const mapStateToProps = state => {
    return {
      tournaments: state.tournaments
    }
  }
  
  export default connect(mapStateToProps)(AllTournaments)