import React from 'react';
import axions from 'axios';
import './Register.scss'

const Register = () =>{
  const handleSubmit = event =>{
    event.preventDefault();
    const client ={
      name:event.target.name.value,
      surnames:event.target.surnames.value,
      phone:event.target.phone.value,
      email:event.target.email.value,
      password:event.target.password.value
    };
    axios.post('http://localhost:3001/client/register', client)
    .then(res => {
      console.log(res)
    })
    .catch(error => console.log (error.response.data))
  }
  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <input type="name" name="name" required placeholder="Your name" />
      <input type="surnames" name="surnames" required placeholder="Your surnames" />
      <input type="phone" name="phone" required placeholder="Your phone" />
      <input type="email" name="email" required placeholder="Your e-mail addres" />
      <input type="password" name="password" required placeholder="Your password"/>
      <button type="submit">Register</button>
    </form>
  )
}

export default Register;