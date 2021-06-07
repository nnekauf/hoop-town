import React from 'react'
import { connect } from 'react-redux'
import { updateTournamentForm } from '../actions/tournamentForm'
import { createTournament } from '../actions/tournaments'


const CreateTournament = ({formData, updateTournamentForm, createTournament, history}) => {    

    const handleChange = event => {
        console.log("trigger Handle change")
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
        <form onSubmit={handleSubmit}>
          <input
            placeholder="name"
            name="name"
            onChange={handleChange}
            value={formData.name}
          /><br/>
          <input
            placeholder="venue"
            name="venue"
            onChange={handleChange}
            value={formData.venue}
          /><br/>
          <input
            placeholder="Date and time"
            name="date"
            onChange={handleChange}
            value={formData.date}
          /><br/>
           <input
            placeholder="host"
            name="host"
            onChange={handleChange}
            value={formData.host}
          /><br/>
            <input
            placeholder="about"
            name="about"
            onChange={handleChange}
            value={formData.about}
          /><br/>
            <input
            placeholder="street"
            name="street"
            onChange={handleChange}
            value={formData.street}
          /><br/>
            <input
            placeholder="city"
            name="city"
            onChange={handleChange}
            value={formData.city}
          /><br/>
            <input
            placeholder="state"
            name="state"
            onChange={handleChange}
            value={formData.state}
          /><br/>
            <input
            placeholder="zipcode"
            name="zipcode"
            onChange={handleChange}
            value={formData.zipcode}
          /><br/>
          <input
            type="submit"
            value="Create Tournament" 
          />
        </form>
    )};

  const mapStateToProps = state => {
    return {
      formData: state.tournaments
    }
  }
  
  export default connect(mapStateToProps, {updateTournamentForm, createTournament})(CreateTournament)
//   t.string "name"
//   t.string "venue"
//   t.datetime "date_time"
//   t.string "host"
//   t.text "about"
//   t.datetime "created_at", precision: 6, null: false
//   t.datetime "updated_at", precision: 6, null: false
//   t.string "street"
//   t.string "city"
//   t.string "state"
//   t.integer "zipcode"
//   has_many :registrations
//   has_many :teams, through: :registrations 