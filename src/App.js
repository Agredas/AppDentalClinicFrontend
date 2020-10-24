import React, {useEffect, useState} from 'react';
import { Switch, BrowserRouter, Route} from 'react-router-dom'
import './App.scss';
import 'antd/dist/antd.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';
import Logout from './containers/Logout/Logout';
import axios from 'axios';

// Que componente carga primero ?
function App() {

  const [client, setClient] = useState(JSON.parse(localStorage.getItem('client')));
 // useEffect(() =>{
 //   const token = localStorage.getItem('authToken')
 //   axios.get(process.env.REACT_APP_BASE_URL + '/client/',{
 //     headers:{
 //       Authorization: token
 //     }
 //   })
 //   .then(res => {
 //     setClient(res.data)
 //   })
 // }, [])
  return (
    <BrowserRouter>
      <Header client={client} setClient={setClient}/>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/register' component={Register} exact/>
          <Route path='/login' exact>
            <Login setClient={setClient} />
          </Route>
          <Route path='/logout' component={Logout} exact/>
        </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
