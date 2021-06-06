import React from 'react'
import { connect } from 'react-redux'
// import { updateLoginForm } from "../actions/loginForm.js"
import { getAllTournaments} from "../actions/tournaments"
import { showAllTournaments} from "../actions/tournaments"
import tournaments from '../reducers/tournaments'

const Tournaments = ({ getAllTournaments}) => {


    
      const renderEventPage = event => {
        // event.preventDefault()
        // getAllTournaments(loginFormData)
        // here I will render the events individual page
      }
      
    // add a filter form eventually
    return (
      <>
        <div className = "tournamentCard" onClick ={renderEventPage}>
            Tournaments Page Here
        </div>

  
      </>
    )
  }

  const mapStateToProps = state => {
    return {
      tournaments: state.tournaments
    }
  }
  
  export default connect(mapStateToProps, { getAllTournaments} )(Tournaments)