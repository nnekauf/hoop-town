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
    
      const handleButton1 = event => {
          event.preventDefault()
        //   debugger
          credentials.role = event.target.value
          signup(credentials)
      }
    
      const handleButton2 = event => {
        event.preventDefault()
        debugger
    }
    return (
      <form onSubmit={handleSubmit}>
        <input placeholder="First Name"  value={credentials.firstName} name="firstName" type="text" onChange={handleInputChange} />
        <input placeholder="Last Name"  value={credentials.lastName} name="lastName" type="text" onChange={handleInputChange} />
        <input placeholder="Username"  value={credentials.username} name="username" type="text" onChange={handleInputChange} />
        <input placeholder="Email"  value={credentials.email} name="email" type="email" onChange={handleInputChange} />
        <input placeholder="Password"  value={credentials.password} name="password" type="password" onChange={handleInputChange} />
        <input placeholder="Confirm Password"  value={credentials.passwordConfirmation} name="passwordConfirmation" type="password" onChange={handleInputChange} />

        <button onClick ={handleButton1} type= "submit" name= "Coach" value="0"> Coach </button>
        <button onClick ={handleButton2} type= "submit" name= "Player" value="1"> Player </button>
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