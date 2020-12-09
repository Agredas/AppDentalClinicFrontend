import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './AdminProfile.scss';
import { useHistory } from "react-router";
import { notification  } from 'antd';

const AdminProfile = ({client, setClient}) =>{
  const history = useHistory();
  const [appointments,setAppointments] = useState([]);
  useEffect(()=>{
    const options = { headers: { Authorization: `Bearer ${client.token}` }};
    axios.get(process.env.REACT_APP_BASE_URL + '/appointment/showAll', options)
    .then((res) =>{
      console.log(res.data)
      setAppointments(res.data);
    }).catch((error) =>{
      console.log(error);
    })
  },[])
  const logout = async () =>{
    try{
      let token= localStorage.getItem('authToken')
      const options = {
        headers: {Authorization: `Bearer ${token}`}
      }
      await axios.post(process.env.REACT_APP_BASE_URL + '/client/logout',{}, options)
      localStorage.removeItem('client')
      localStorage.removeItem('authToken')
      setClient(null)
      notification.success({message:'Goodbye!',description:'Hope to see you soon!'})
         setTimeout(() => {
            history.push('/')
        }, 1000); 
    }catch (error) {
      console.log(error);
  }
  }
        return (
      <div className='appointmentprofile'>
        <div className='appointmentContainer'>
          {appointments?.map(appointment =>
              <div key={appointment._id} className='infoAppointment'>
              <div className='inside'>{appointment.title}</div>
              <div className='inside'>{appointment.description}</div>
              <div className='inside'>{appointment.date_appointment}</div>
            </div>)}
        </div>
        <div className="justifybutton">
        <button className='logout-button' onClick={logout}>Logout</button>
        </div>
      </div>
      
        )
}

export default AdminProfile;