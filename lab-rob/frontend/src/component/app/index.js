import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Header from '../header';
import Landing from '../landing';
import Dashboard from '../dashboard';
import AuthRedirect from '../auth-redirect';
import {getProfileAction} from '../../action/profile';

class App extends React.Component {
  componentDidMount() {
    if(this.props.loggedIn) {
      this.props.getProfile()
        .catch(console.error);
    }
  }

  render () {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <Header />
            <Route path='*' component={AuthRedirect} />
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
  getProfile: () => dispatch(getProfileAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);