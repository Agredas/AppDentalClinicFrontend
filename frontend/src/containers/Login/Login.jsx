import React from 'react';
import axios from 'axios';
import './Login.scss';

const Login = () => {
  const handleSubmit = async (event) =>{
    try{
      event.preventDefault(); // Prevent the page from refreshing.
      const client = {
      email:event.target.email.value,
      password:event.target.password.value
      };    
      let result = await axios.post('http://localhost:3001/client/login', client)
      let token = result.data.token;
      localStorage.setItem("token", token);
    }catch (error){
      console.log(error)
    }
  }
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input type="email" name="email" required placeholder="Your e-mail address" />
      <input type="password" name="password" required placeholder="Your password"/>
      <button type="submit">Log In</button>
    </form>
  )
}

export default Login;