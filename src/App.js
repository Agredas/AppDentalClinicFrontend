import React, {useEffect, useState} from 'react';
import { Switch, BrowserRouter, Route, Redirect} from 'react-router-dom'
import './App.scss';
import 'antd/dist/antd.css';
import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';
import Profile from './containers/Profile/Profile';
import Create from './containers/Create/Create';
import Appointments from './containers/Appointments/Appointments';
import CheckRoles from "./components/CheckRoles";

function App() {

let initialClient = null;
  try {
    initialClient = JSON.parse(localStorage.getItem('client'));
  } catch (error) {
    console.error(error)
  }
  const [client, setClient] = useState(initialClient);
  return (
    <BrowserRouter>
      <Switch>
         {client ?
          <>
          <Route path='/profile' exact>
            <CheckRoles client={client} setClient={setClient}/>
          </Route>
          <Route path='/create' component={Create} exact/>
          <Route path='/appointments' component={Appointments} exact/>
          <Redirect to="/profile" exact />
          </>
          :
          <>
          <Route path='/' component={Home} exact/>
          <Route path='/register' component={Register} exact/>
          <Route path='/login' exact>
            <Login setClient={setClient}/>
          </Route>
          <Redirect to="/" exact />
          </>
          }
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;  