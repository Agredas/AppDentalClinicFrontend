import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './Appointments.scss';
import {notification} from 'antd';
import {Link} from 'react-router-dom';

const Appointments = () =>{
  const [appointments,setAppointments] = useState([]);
  const token = localStorage.getItem('authToken')
  useEffect(()=>{
    const options = { headers: { Authorization: `Bearer ${token}` }};
    axios.get(process.env.REACT_APP_BASE_URL + '/appointment/show', options)
    .then((res) =>{
      console.log(res.data)
      setAppointments(res.data);
    }).catch((error) =>{
      console.log(error);
    })
  },[])

  const deleteAppointment = async (id) =>{
    const options = { headers: { Authorization: `Bearer ${token}` }};
    await axios.delete(process.env.REACT_APP_BASE_URL + '/appointment/cancel/' + id, options)
    notification.success({message:'Appointment cancelled.', description:'Appointment has been successfully cancelled.'})
    await axios.get(process.env.REACT_APP_BASE_URL + '/appointment/show', options)
    .then((res) =>{
      console.log(res.data)
      setAppointments(res.data);
    }).catch((error) =>{
      console.log(error);
    })
  }
  return (
      <div className='appointmentprofile'>
        <div className='appointmentContainer'>
            {appointments?.map(appointment =>
                <div key={appointment.id} className='infoAppointment'>
                  <div className='inside'>{appointment.title}</div>
                  <div className='inside'>{appointment.description}</div>
                  <div className='inside'>{appointment.date_appointment}</div>
                  <div className='buttondelete'><button className='deleteButton' onClick={()=> {deleteAppointment(appointment.id)}}>X</button></div>
                </div>
            )}
        </div>
        <div className="justifybutton">        
        <Link to='/profile' className='backbutton'>Back</Link>
        </div>

      </div>
);

}

export default Appointments;
