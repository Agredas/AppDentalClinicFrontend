import React from 'react';
import axios from 'axios'
import './Create.scss';
import {Input, notification} from 'antd';
import {useHistory} from "react-router";
import {Link} from 'react-router-dom';

const Create = () =>{
  const history = useHistory();
  const token = localStorage.getItem('authToken')
  const handleSubmit = event =>{
      event.preventDefault();
      const headers = { headers: { Authorization: `Bearer ${token}` }};
      const appointmentBody={
        title: event.target.title.value,
        description: event.target.description.value,
        date_appointment: event.target.date_appointment.value,
      };
      axios.post(process.env.REACT_APP_BASE_URL + '/appointment/create', appointmentBody, headers)
      .then(res=> {
        console.log(res.data)
        notification.success({message: 'Appointment created.', description: 'Succesfully appointment created.'})

        setTimeout(() => {
          history.push("/appointments")
      }, 1500);
      }).catch(error => {
        console.log(error)
        notification.error({message: 'Creation error.', description:'There was an error trying to create an appointment.'})
      })
  }
  return (
    <div className='create'>
      <div className="headerCreate">
        <div className='buttonCreate'>
        <Link to='/profile' className='linkBack'>Back</Link>
        </div>
      </div>
    <form className="create-form" onSubmit={handleSubmit}>
    <Input type="title" name="title" required placeholder="Write title" />
    <Input type="descriptoin" name="description" required placeholder="Write description" />
    <Input type="date" name="date_appointment" required placeholder="Write date" />

    <button  type="primary" className='noStyle' htmlType="submit">Create</button>

</form>

</div>
)
}

export default Create;