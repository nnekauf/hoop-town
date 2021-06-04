import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm.js"
import { login } from "../actions/currentUser.js"

const Login = ({loginFormData, updateLoginForm, login,}) => {

    const handleInputChange = event => {
        
      }
    
      const handleSubmit = event => {
        
      }
    
    return (
      <form onSubmit={handleSubmit}>
        <input placeholder="username"  value={loginFormData.username} name="username" type="text" onChange={handleInputChange} />
        <input placeholder="password"  value={loginFormData.password} name="password" type="text" onChange={handleInputChange} />
        <input type="submit" value="Log In"/>
      </form>
    )
  }

  const mapStateToProps = state => {
    return {
      loginFormData: state.loginForm
    }
  }
  
  export default connect(mapStateToProps, {updateLoginForm, login} )(Login)