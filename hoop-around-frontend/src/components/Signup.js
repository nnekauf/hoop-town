import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from "../actions/signupForm.js"
import { signup } from "../actions/currentUser.js"

const Signup = ({credentials, updateSignupForm, signup}) => {

    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
          ...credentials,
          [name]: value
        }
        updateSignupForm(updatedFormInfo)  
      }
    
      const handleSubmit = event => {
        event.preventDefault()
        signup(credentials)
      }
    
    //   const handleButton = event => {
    //       event.preventDefault()
    //     //   debugger
    //       credentials.role = event.target.value
    //       updateSignupForm(updatedFormInfo)
    //   }
    
    return (
      <form onSubmit={handleSubmit}>
        <input placeholder="First Name"  value={credentials.firstName} name="firstName" type="text" onChange={handleInputChange} />
        <input placeholder="Last Name"  value={credentials.lastName} name="lastName" type="text" onChange={handleInputChange} />
        <input placeholder="Username"  value={credentials.username} name="username" type="text" onChange={handleInputChange} />
        <input placeholder="Email"  value={credentials.email} name="email" type="email" onChange={handleInputChange} />
        <input placeholder="Password"  value={credentials.password} name="password" type="password" onChange={handleInputChange} />
        <input placeholder="Confirm Password"  value={credentials.passwordConfirmation} name="passwordConfirmation" type="password" onChange={handleInputChange} />
        
        <label> 
            Coach
            <input type="radio" name = "role" value="0" onChange ={handleInputChange}>
            </input>
        </label>
        <label> 
            Player
            <input type="radio" name = "role" value="1" onChange ={handleInputChange}>
            </input>
        </label>
        
        <input type="submit" value="Sign Up"/>
      </form>
    )
  }
// I somehow need to integrate what type of account is this to set the type of user
  const mapStateToProps = state => {
    return {
      credentials: state.signupForm
    }
  }
  
  export default connect(mapStateToProps, {updateSignupForm, signup} )(Signup)