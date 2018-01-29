import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

import Landing from '../landing';
import Header from '../header';
import Dashboard from '../dashboard';
import AuthRedirect from '../auth-redirect';
import AuthForm from '../auth-form';
import Profile from '../profile';

import * as clientProfile from '../../action/client-profile';

class App extends React.Component {
  render() {
    return(
      <div className = 'app'>
        <BrowserRouter>
          <div>
            <Route path='*' component={AuthRedirect}/>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/signup' component={Landing}/>
            <Route exact path='/login' component={Landing}/>
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/profile' component={Profile}/>
          </div>
        </BrowserRouter>
      </div>    
    );
  }
}
const mapStateToProps = (state) => ({
  loggedIn: !!state.token,
});

const mapDispatchToProps = (dispatch) => ({
  fetchClientProfile : () => dispatch(clientProfile.fetchAction()),
});

export default App;