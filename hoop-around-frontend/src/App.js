import React from 'react'
import './App.css'
import Login from "./components/Login"
// import {connect} from 'react-redux'

class App extends React.Component {

  // componentDidMount() {
  //   fetch ('http://localhost:3000/api/v1/users', {
  //     method: "GET"
  //   })
  //   .then(r=>r.json())
  //   .then(r=> console.log(r))
  // }

  render(){
    return (
      <div className="App">
        <Login/>>
      </div>
    );
    }

}

export default App;
