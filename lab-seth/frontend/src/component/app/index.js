import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from '../landing';
import Dashboard from '../dashboard';
import Profile from '../profile';
import AuthRedirect from '../auth-redirect';
import * as clientProfile from '../../action/client-profile';

import './app.scss'

//TODO: add something here to check for localstorage?

class App extends React.Component {
  
  componentDidMount(){
    if(this.props.loggedIn){
      this.props.fetchClientProfile()
        .catch(console.error);
    }
  }

  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div className='center'>
            <Header />
            <Route path='*' component={AuthRedirect} />
            <Route exact path='/' component={Landing} />
            <Route exact path='/signup' component={Landing} />
            <Route exact path='/login' component={Landing} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/profile' component={Profile} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: !!state.token,
})

const mapDispatchToProps = (dispatch) => ({

})

export default App;