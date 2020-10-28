import React, {useEffect, useState} from 'react';
import { Switch, BrowserRouter, Route} from 'react-router-dom'
import './App.scss';
import 'antd/dist/antd.css';
import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';
import Profile from './containers/Profile/Profile';
import axios from 'axios';

function App() {
  let initialClient = null;
  try {
    initialClient = JSON.parse(localStorage.getItem('client'));
  } catch (error) {
    console.error(error)
  }
  const [client, setClient] = useState(initialClient);
 useEffect(() =>{
   const token = localStorage.getItem('authToken')
   if(token){
    axios.get(process.env.REACT_APP_BASE_URL + '/client',{
      headers:{
        Authorization: token
      }
    })
    .then(res => {
      setClient(res.data)
    }).catch(err => console.log)
   }
   
 }, [])
  return (
    <BrowserRouter>
      <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/register' component={Register} exact/>
          <Route path='/login'  exact>
            <Login setClient={setClient}/>
          </Route>
          <Route path='/profile' exact>
            <Profile setClient={setClient}/>
          </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;