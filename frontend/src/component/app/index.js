// import './_app.scss';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import Landing from '../landing';
import Dashboard from '../dashboard';
import AuthRedirect from '../auth-redirect';
import Header from '../header';
import Profile from '../profile';

import * as clientProfile from '../../action/client-profile';

class App extends React.Component{

  componentDidMount(){
    if(this.props.loggedIn){
      this.props.fetchClientProfile()
        .catch(console.error);
    }
  }

  render(){
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="*" component={AuthRedirect} />
            <Route path="/" component={Landing} />
            <Route path="/signup" component={Landing} />
            <Route path="/login" component={Landing} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/profile" component={Profile} />
          </div>
        </BrowserRouter>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  loggedIn : !!state.token,
});

const mapDispatchToProps = (state) => ({
  fetchClientProfile : () => dispatch(clientProfile.fetchAction()),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
