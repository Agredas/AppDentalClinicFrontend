import React, { Component } from 'react'

class Home extends Component {
  constructor(props){
    super(props);
  }
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