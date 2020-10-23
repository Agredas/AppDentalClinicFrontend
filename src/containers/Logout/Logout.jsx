import React from 'react';
import axios from 'axios'
import './Logout.scss';
import { useHistory } from "react-router";
import { notification, Button } from 'antd';

const Logout = ({setClient}) =>{
  const history = useHistory();

  const handleSubmit = async (event) =>{
    try{
      event.preventDefautl();
      let clientStorage= JSON.parse(localStorage.getItem('client'))
      const clientBody = {
        headers: {Authorization: `${clientStorage.token}`}
      }

      await axios.get(process.env.REACT_APP_BASE_URL+'/client/logout', clientBody)
      localStorage.removeItem('client')
      notification.success({message:'Welcome!',description:'Welcome!'})
        setTimeout(() => {
            history.push('/')
        }, 1000);

      setClient(null)
      history.push('/')
    }catch (error) {
      console.log(error);
  }
  }
  return (
    <form className="logout-form" onSubmit={handleSubmit}>
        <Button type="primary" htmlType="submit">Logout</Button>
    </form>
)
}

export default Logout;