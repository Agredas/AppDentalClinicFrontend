import React from 'react';
import axios from 'axios'
import './Profile.scss';
import {Link} from 'react-router-dom';
import { useHistory } from "react-router";
import { notification,  } from 'antd';

const Profile = ({setClient}) =>{
  const history = useHistory();

  const logout = async () =>{
    try{
      let token= localStorage.getItem('authToken')
      const options = {
        headers: {Authorization: `Bearer ${token}`}
      }
      console.log(token)
      await axios.post(process.env.REACT_APP_BASE_URL+'/client/logout',{}, options)
      localStorage.removeItem('client')
      localStorage.removeItem('authToken')
      setClient(null)
      notification.success({message:'Hope to see you soon!',description:'Hope to see you soon!'})
         setTimeout(() => {
            history.push('/')
        }, 1000); 
    }catch (error) {
      console.log(error);
  }
  }
        return (
        <div className='profile'>
          <div className='header'>
              <div className='icon'></div>
          </div>
          <div className='buttons'>
              <Link to='/appointments'>Show Appointments</Link>
              <div className='hole1'></div>
              <Link to='/create'>Create Appointment</Link>
          </div>
          <div className='logout'>
            <div>
              <button className='logout-button' onClick={logout}>Logout</button>
            </div>
          </div>
          <div className='footer'>
            <div>Dental Clinic App</div>
            <div className='hole2'></div>
            <div>©Andrea Ágredas</div>
          </div>
        </div>
        )
}

export default Profile;