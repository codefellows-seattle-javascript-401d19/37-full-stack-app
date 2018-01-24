import './_app.scss';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Landing from '../landing';
import Dashboard from '../dashboard';
import AuthRedirect from '../auth-redirect';
//import landing

class App extends React.Component{
  render(){
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <Route path="*" component={AuthRedirect} />
            <Route path="/" component={Landing} />
            <Route path="/signup" component={Landing} />
            <Route path="/login" component={Landing} />
            <Route path="/dashboard" component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>);
  }
}

export default App;
