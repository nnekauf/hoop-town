import React from 'react'

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

  
export default Login