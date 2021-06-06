import React from 'react'
import { connect } from 'react-redux'
// import { updateLoginForm } from "../actions/loginForm.js"
import { getAllTournaments} from "../actions/tournaments"

const Tournaments = ({getAllTournaments}) => {


    
      const renderEventPage = event => {
        // event.preventDefault()
        // getAllTournaments(loginFormData)
        // here I will render the events individual page
      }
    
    // add a filter form eventually
    return (
      <>
      <div className = "tournamentCard" onClick ={renderEventPage}>

      </div>
      </>
    )
  }

  const mapStateToProps = state => {
    return {
      loginFormData: state.loginForm
    }
  }
  
  export default connect(mapStateToProps, {updateLoginForm, getAllTournaments} )(Tournaments)