import React from 'react'

const Login = () => {

    const handleInputChange = event => {
        
      }
    
      const handleSubmit = event => {
        
      }
    
    return (
      <form onSubmit={handleSubmit}>
        <input placeholder="username"  name="username" type="text" onChange={handleInputChange} />
        <input placeholder="password"  name="password" type="text" onChange={handleInputChange} />
        <input type="submit" value="Log In"/>
      </form>
    )
  }

  
export default Login