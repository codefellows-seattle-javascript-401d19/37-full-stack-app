import React from 'react';
import {connect} from 'react-redix';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from '../landing';
import Dashboard from '../dashboard';
import AuthRedirect from '../auth-redirect';

import './app.scss'

//TODO: add something here to check for localstorage?

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div className='center'>
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

export default App;