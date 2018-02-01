import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Header from '../header';
import Landing from '../landing';
import Profile from '../profile';
import Dashboard from '../dashboard';
import AuthRedirect from '../auth-redirect';
import {getProfileAction} from '../../action/profile';

class App extends React.Component {
  componentDidMount() {
    if(this.props.loggedIn) {
      this.props.getProfile();
    }
  }

  render () {
    return (
      <div className='app'>
        <BrowserRouter>
          <Fragment>
            <Header />
            <Route path='*' component={AuthRedirect} />
            <Route exact path='/' component={Landing} />
            <Route exact path='/signup' component={Landing} />
            <Route exact path='/login' component={Landing} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/profile' component={Profile} />
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: !!state.token,
});

const mapDispatchToProps = dispatch => ({
  getProfile: () => dispatch(getProfileAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);