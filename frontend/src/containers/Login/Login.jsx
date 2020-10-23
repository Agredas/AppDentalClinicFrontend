import React from 'react';
import axios from 'axios';
import './Login.scss';

import {useHistory} from 'react-router';
const Login = ({setClient}) => {
  const history = useHistory();
  const handleSubmit = event =>{
    event.preventDefault(); // Prevent the page from refreshing.
    const bodyClient = {
      email:event.target.email.value,
      password:event.target.password.value
    };    
    axios.post('http://localhost:3001/client/login', bodyClient)
    .then(res => {
      console.log(res.data.client);
      setClient(res.data.bodyClient)
      localStorage.setItem('authToken', JSON.stringify(res.data.token))
      localStorage.setItem('client', JSON.stringify(res.data.client))

      setTimeout(() => {
        history.push('/')
      }, 1500);
    }).catch (error => console.log(error.response.data))
  }
  return (
    <form className='login-form' onSubmit={handleSubmit}>
      <input type='email' name='email' required placeholder='Write your email'/>
      <input type="password" name="password" required placeholder="Introduce tu contraseña"/>
      <button type="submit">Log in</button>
    </form>
  )
}

export default Login;