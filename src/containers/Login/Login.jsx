import React from 'react';
import axios from 'axios';
import './Login.scss';
import {useHistory} from 'react-router';
import {Input, notification} from 'antd';
import {Link} from 'react-router-dom';


const Login = ({setClient}) => {
  const history = useHistory();
  const handleSubmit = event =>{
    event.preventDefault(); // to prevent refreshing the page
    const client ={
        email:event.target.email.value,
        password:event.target.password.value
    };
    console.log(client)
    axios.post('https://app-dental-clinic-backend.herokuapp.com/client/login', client)
    .then(res=>{
        console.log('axios done')
        localStorage.setItem('authToken',res.data.token);
        localStorage.setItem('client',JSON.stringify(res.data))
        setClient(res.data)
        
        notification.success({message:'Welcome!',description:'Welcome to our application! '+client.email})
        
        setTimeout(() => {
            history.push('/profile')
        }, 1000);
    })
    .catch(error=> {throw (error)})
}
  return (
    <div className='login'>
      <div className='headerIcon'>
        <div className='iconWelcome'></div>
      </div>
      <div className='headerLogin'>
        <div className='buttonLogin'>
        <Link to='/' className='linkBack'>Back</Link></div>
      </div>
      <form className='login-form' onSubmit={handleSubmit}>
        <Input type='email' name='email' required placeholder='Write your email'/>
        <Input type="password" name="password" required placeholder="Write your password"/>
        <button className='buttonLogin' type="submit">Login</button>
    </form>
    <div className='phrase2'>Thanks for coming back</div>
    </div>
  )
}

export default Login;