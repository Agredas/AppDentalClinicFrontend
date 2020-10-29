import React from 'react';
import {Link} from 'react-router-dom';

import './Home.scss';

const Home = () =>{
        return (
        <div className='home'>
          <div className='header'>
              <div className='logo'></div>
          </div>
          <div className='buttons'>
              <Link to='/register'>Register</Link>
              <div className='hole1'></div>
              <Link to='/login'>Login</Link>
          </div>
          <div className='phrase'>☺ We want to make you smile ☺</div>
          <div className='footer'>
            <div>Dental Clinic App</div>
            <div className='hole2'></div>
            <div>©Andrea Ágredas</div>
          </div>
        </div>
        )
}  

export default Home;