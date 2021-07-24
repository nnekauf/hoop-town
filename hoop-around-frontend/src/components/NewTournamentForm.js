import React from 'react'
import { connect } from 'react-redux'
import { updateTournamentForm } from '../actions/tournamentForm'
import { createTournament } from '../actions/tournaments'


const NewTournamentForm = ({formData, updateTournamentForm, createTournament, history}) => {    

    const handleChange = event => {
      event.preventDefault()
        const { name, value } = event.target
        const updatedFormInfo = {
            ...formData,
            [name]: value
          }
        updateTournamentForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        createTournament(formData, history)
      }

    return (
      <>
        <form className= "newTournamentForm" onSubmit={handleSubmit}>
          <input placeholder="name" name="name" onChange={handleChange} value={formData.name} />
          <input placeholder="venue" name="venue" onChange={handleChange}   value={formData.venue}/>
          <input placeholder= "Date and time" name="date" type="datetime-local" onChange={handleChange} value={formData.date}/>
          <input placeholder="host" name="host"  onChange={handleChange}  value={formData.host} />
          <input placeholder="about" name="about"  onChange={handleChange}   value={formData.about} />
          <input placeholder="street" name="street"   onChange={handleChange}  value={formData.street} />
          <input placeholder="city" name="city"     onChange={handleChange}    value={formData.city} />
          <input placeholder="state" name="state"    onChange={handleChange}   value={formData.state} />
          <input placeholder="zipcode" name="zipcode" type="number" onChange={handleChange} value={formData.zipcode} />
          
          <input type="submit" value="Create Tournament"/> 
        </form>
        </>
    )
};

  const mapStateToProps = state => {
    return {
      
      formData: state.tournamentForm,
      
    }
  }
  
  export default connect(mapStateToProps, {updateTournamentForm, createTournament})(NewTournamentForm)
