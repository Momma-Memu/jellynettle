import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import Login from './loginComponents/Login';
import SignUp from './loginComponents/SignUp';
import { Route } from 'react-router-dom';
import About from './navComponents/About';
import Safety from './navComponents/Safety';
// import Support from './navComponents/Support'
import Profile from './profileComponents/ProfileBase';
import Settings from './loggedInNavComponents/Settings';
import Home from './homeComponents/Home';
import Group from './loggedInNavComponents/Group';
import CreateGroup from './loggedInNavComponents/CreateGroup';
import { PrivateRoute } from './routesUtil';
import SearchResults from './loggedInNavComponents/SearchResults';


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
        <PrivateRoute isLoggedIn={id} path='/profile/:id' component={Profile}/>
        <PrivateRoute isLoggedIn={id} path='/settings' component={Settings}/>
        <PrivateRoute isLoggedIn={id} path='/search/:value' component={SearchResults}/>
        <PrivateRoute isLoggedIn={id} params={props} path='/group/:id' component={Group} />
        <PrivateRoute isLoggedIn={id} path='/create-group' component={CreateGroup} />
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
