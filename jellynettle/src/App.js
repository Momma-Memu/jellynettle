import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import Login from './loginComponents/Login';
import SignUp from './loginComponents/SignUp';
import { Route } from 'react-router-dom';
import About from './navComponents/About';
import Safety from './navComponents/Safety';
import Support from './navComponents/Support'
import Profile from './profileComponents/ProfileBase';
import Settings from './loggedInNavComponents/Settings';
import Home from './homeComponents/Home';
import { PrivateRoute } from './routesUtil';
// import {useSelector} from 'react-redux';


function App(props) {
  const { id } = useSelector(state => state.authentication)
  return (
    <div>
      <BrowserRouter>
        <PrivateRoute isLoggedIn={id} exact path='/' component={Home} />
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/about' component={About}/>
        <Route path='/safety' component={Safety}/>
        <Route path='/support' component={Support} />
        <PrivateRoute isLoggedIn={id} path='/profile' component={Profile}/>
        <PrivateRoute isLoggedIn={id} path='/settings' component={Settings}/>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    token: state.user
  }
}

export default connect(mapStateToProps)(App)
