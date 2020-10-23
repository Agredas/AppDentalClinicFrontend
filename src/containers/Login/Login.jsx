import React from 'react';
import axios from 'axios';
import './Login.scss';
import {useHistory} from 'react-router';
import {notification} from 'antd'

const Login = ({setClient}) => {
  const history = useHistory();
  const handleSubmit = event =>{
    console.log('hola')
    event.preventDefault(); // to prevent refreshing the page
    const client ={
        email:event.target.email.value,
        password:event.target.password.value
    };
    axios.post(process.env.REACT_APP_BASE_URL+'/client/login', client)
    .then(res=>{
        setClient(res.data.client)
        console.log('hola')
        localStorage.setItem('authToken',res.data.token);
        localStorage.setItem('client',JSON.stringify(res.data.client))
        notification.success({message:'Welcome!',description:'Welcome! '+client.email})
        setTimeout(() => {
            history.push('/')
        }, 1000);
    })
    .catch(error=>console.log(error))
}
  return (
    <form className='login-form' onSubmit={handleSubmit}>
      <input type='email' name='email' required placeholder='Write your email'/>
      <input type="password" name="password" required placeholder="Introduce tu contraseña"/>
      <button type="submit">Login</button>
    </form>
  )
}

export default Login;