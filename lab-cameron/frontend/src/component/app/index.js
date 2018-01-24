import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from '../landing';
import Dashboard from '../dashboard';
import AuthRedirect from '../auth-redirect';

import * as clientProfile from '../../action/client-profile';

class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <Route path='*' component={ AuthRedirect } />
            <Route exact path='/' component={Landing} />
            <Route exact path='/signup' component={Landing} />
            <Route exact path='/login' component={Landing} />
            <Route exact path='/dashboard' component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: !!state.token,
});

const mapDispatchToProps = dispatch => ({
  fetchClientProfile: () => dispatch(clientProfile.fetchAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
