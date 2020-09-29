import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
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


function App(props) {

  return (
    <div>
      <BrowserRouter>
        <PrivateRoute isLoggedIn={props.token} exact path='/' component={Home} />
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

const mapStateToProps = state => {
  return {
    token: state.user
  }
}

export default connect(mapStateToProps)(App)
