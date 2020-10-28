import React from 'react';
import {Link} from 'react-router-dom';

import './Profile.scss';

const Profile = () =>{
        return (
        <div className='profile'>
          <div className='header'>
              <div className='icon'></div>
          </div>
          <div className='buttons'>
              <Link to='/show'>Show Your Appointments</Link>
              <div className='hole1'></div>
              <Link to='/create'>Create Appointment</Link>
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