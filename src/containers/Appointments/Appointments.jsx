import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './Appointments.scss';

const Appointments = () =>{
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

  }


  return (
        <div className="appointmentContainer">
            {appointments?.map(appointment =>
                <div className="cardAppointment">{appointment.title}<button onClick={()=> {deleteAppointment(appointment._id)}}>X</button>
                </div>
            )}
        </div>
);

}

export default Appointments;
