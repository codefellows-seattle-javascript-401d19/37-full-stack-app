import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from '../header';
import Landing from '../landing';
import Profile from '../profile';
import Dashboard from '../dashboard';
import AuthRedirect from '../auth-redirect';
import {getProfileAction} from '../../action/profile';
import {getPhotosActionRequest} from '../../action/photos';

class App extends React.Component {
  componentDidMount() {
    if(this.props.loggedIn) {
      this.props.getProfile();
      this.props.getPhotos();
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
  getPhotos: () => dispatch(getPhotosActionRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);