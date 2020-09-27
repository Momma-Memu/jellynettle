import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Login from './loginComponents/Login';
import SignUp from './loginComponents/SignUp';
import { Route } from 'react-router-dom';
import About from './navComponents/About';
import Safety from './navComponents/Safety';
import Support from './navComponents/Support'
import Profile from './profileComponents/ProfileBase';
import Settings from './loggedInNavComponents/Settings';
import { PrivateRoute } from './routesUtil';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/about' component={About}/>
        <Route path='/safety' component={Safety}/>
        <Route path='/support' component={Support} />
        <PrivateRoute path='/profile' component={Profile}/>
        <PrivateRoute path='/settings' component={Settings}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
