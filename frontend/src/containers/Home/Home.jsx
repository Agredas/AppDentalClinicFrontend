import React, { Component } from 'react'

class Home extends Component {
  render(){
    return (
      <div>
        <button className="registerButton" onClick>Register</button>
        <button className="loginButton" onClick>Log In</button>
      </div>
    )
  }
}

export default Home;