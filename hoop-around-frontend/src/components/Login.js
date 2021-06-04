import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm.js"
import { login } from "../actions/currentUser.js"

const Login = () => {

    const handleInputChange = event => {
        
      }
    
      const handleSubmit = event => {
        
      }
    
    return (
      <form onSubmit={handleSubmit}>
        <input placeholder="username"  value={undefined} name="username" type="text" onChange={handleInputChange} />
        <input placeholder="password"  value={undefined} name="password" type="text" onChange={handleInputChange} />
        <input type="submit" value="Log In"/>
      </form>
    )
  }

  const mapStateToProps = state => {
    return {
      loginFormData: state.loginForm
    }
  }
  
  export default connect(mapStateToProps,  )(Login)