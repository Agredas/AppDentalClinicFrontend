import React, { Component } from 'react'

class Home extends Component {
    render(){
        return (
            <div>
                Página Home
            </div>
        )
    }
    
}
export default Home;

/* import React from 'react'
import axios from 'axios'
import { Input, Modal, Button } from 'antd';



const Home = ({ showModalLogin, setShowModalLogin, setClient})=>{
  const handleSubmit = async (event) =>{
    try {
      event.preventDefault(); // Prevent the page from refreshing.
      const bodyClient = {
      email:event.target.email.value,
      password:event.target.password.value
    };    
      let response = axios.post('http://localhost:3001/client/login', bodyClient)

      let client = response.data
      localStorage.setItem('authToken', JSON.stringify(client.token))
      localStorage.setItem('client', JSON.stringify(client.client))
    
      setClient(client)

    } catch (error) {
      console.log(error.response.data)
    }
    return (
      <div>
        <button className="registerButton" onClick>Register</button>
    

<Modal
    title="Basic Modal"
    visible= {true}
    onOk={this.handleOk}
    onCancel={this.handleCancel} 
    >
    <form className="login-form" onSubmit={handleSubmit}>
      <Input type="email" name="email" size="large" placeholder="Email"/>
      <Input.Password size="large" name="password" placeholder="Contraseña" />
      <Button type="primary" htmlType="submit">Log In</Button>
    </form>
  </Modal>

      </div>
    )
  }
}


export default Home; */