import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Login from './loginComponents/Login';
import SignUp from './loginComponents/SignUp';
import { Route } from 'react-router-dom';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/about' component={About}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
