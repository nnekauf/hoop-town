import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from "../actions/signupForm.js"
import { signup } from "../actions/currentUser.js"

const Signup = ({credentials, updateSignupForm, signup, history}) => {

    const handleInputChange = event => {
      event.preventDefault()
        const { name, value } = event.target
        const updatedFormInfo = {
          ...credentials,
          [name]: value
        }
        updateSignupForm(updatedFormInfo)  
      }
    
      const handleSubmit = event => {
        event.preventDefault()
        signup(credentials, history)
      }
    

    
    return (
      <form onSubmit={handleSubmit}>
        <input placeholder="First Name"  value={credentials.firstName} name="firstName" type="text" onChange={handleInputChange} />
        <input placeholder="Last Name"  value={credentials.lastName} name="lastName" type="text" onChange={handleInputChange} />
        <input placeholder="Username"  value={credentials.username} name="username" type="text" onChange={handleInputChange} />
        <input placeholder="Email"  value={credentials.email} name="email" type="email" onChange={handleInputChange} />
        <input placeholder="Contact Number"  value={credentials.number} name="number" type="tel" onChange={handleInputChange} />
        <input placeholder="Password"  value={credentials.password} name="password" type="password" onChange={handleInputChange} />
        <textarea placeholder="Tell Us About Yourself"  value={credentials.bio} name="bio" type="text" onChange={handleInputChange} />
        <input placeholder="Confirm Password"  value={credentials.passwordConfirmation} name="passwordConfirmation" type="password" onChange={handleInputChange} />
        
        <label> 
            Coach
            <input type="radio" name = "role" value={0} onChange ={handleInputChange}>
            </input>
        </label>
        <label> 
            Player
            <input type="radio" name = "role" value={1} onChange ={handleInputChange}>
            </input>
        </label>
        
        <input type="submit" value="Sign Up"/>
      </form>
    )
  }

  const mapStateToProps = state => {
    return {
      credentials: state.signupForm
    }
  }
  
  export default connect(mapStateToProps, {updateSignupForm, signup} )(Signup)