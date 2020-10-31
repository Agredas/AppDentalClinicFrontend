import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './Appointments.scss';
import {notification} from 'antd';
import {useHistory} from 'react-router';
import {Link} from 'react-router-dom';

const Appointments = () =>{
  const history = useHistory();
  const [appointments,setAppointments] = useState([]);
  const token = localStorage.getItem('authToken')
  useEffect(()=>{
    const options = { headers: { Authorization: `Bearer ${token}` }};
    axios.get('http://localhost:3001/appointment/show', options)
    .then((res) =>{
      console.log(res.data)
      setAppointments(res.data.appointment);
    }).catch((error) =>{
      console.log(error);
    })
  },[])

  

  const deleteAppointment = async (id) =>{
    const options = { headers: { Authorization: `Bearer ${token}` }};
    await axios.delete('http://localhost:3001/appointment/cancel/' + id, options)
    notification.success({message:'Appointment has been successfully cancelled.', description:'Appointment has been successfully cancelled.'})
    await axios.get('http://localhost:3001/appointment/show', options)
    .then((res) =>{
      console.log(res.data)
      setAppointments(res.data.appointment);
    }).catch((error) =>{
      console.log(error);
    })
  }
  return (
      <div className='appointmentprofile'>
        <div className="appointmentContainer">
            {appointments?.map(appointment =>
                <div key={appointment._id} className="cardAppointment">{appointment.title}<button onClick={()=> {deleteAppointment(appointment._id)}}>X</button>
                </div>
            )}
        </div>
        <div className='backbutton'><Link to='/profile'>Back</Link></div>
      </div>
);

}

export default Appointments;
