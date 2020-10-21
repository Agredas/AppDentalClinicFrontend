import React from 'react';
import { Switch, BrowserRouter, Route} from 'react-router-dom'
import './App.scss';


import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';
/* import Logout from './containers/Logout/Logout';
import Modify from './containers/Modify/Modify';
import Delete from './containers/Delete/Delente'; */


function App() {
  return (
    <BrowserRouter>
      <Header />
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/register' component={Register} exact/>
          <Route path='/login' component={Login} exact/>

          {/* <Route path='/logout' component={Logout} exact/>
          <Route path='/modify' component={Modify} exact/>
          <Route path='/delete' component={Delete} exact/> */}
        </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
