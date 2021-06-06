import React from 'react'
import { connect } from 'react-redux'
// import { updateLoginForm } from "../actions/loginForm.js"
import { getAllTournaments} from "../actions/tournaments"
import { allTournaments} from "../actions/tournaments"
import tournaments from '../reducers/tournaments'

const Tournaments = ({getAllTournaments}) => {


    
      const renderEventPage = event => {
        // event.preventDefault()
        // getAllTournaments(loginFormData)
        // here I will render the events individual page
      }
    
    // add a filter form eventually
    return (
      <>
      { tournaments.map = (t) => {
        <div className = "tournamentCard" onClick ={renderEventPage}>
        {t.name}
        </div>
      }

      }
      
      </>
    )
  }

  const mapStateToProps = state => {
    return {
      tournaments: state.tournaments
    }
  }
  
  export default connect(mapStateToProps, { getAllTournaments, allTournaments} )(Tournaments)