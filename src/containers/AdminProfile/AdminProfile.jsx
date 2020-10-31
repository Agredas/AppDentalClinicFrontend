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
    axios.get('http://localhost:3001/appointment/showAll', options)
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
      <div>
        <div className="appointmentContainer">
          {appointments?.map(appointment =>
              <div key={appointment._id} className="cardAppointment">{appointment.title}
        </div>)}
        </div>
        <div>
        <button className='logout-button' onClick={logout}>Logout</button>
        </div>
      </div>
      
        )
}

export default AdminProfile;