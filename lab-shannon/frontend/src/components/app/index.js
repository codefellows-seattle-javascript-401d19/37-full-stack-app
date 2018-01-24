import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Dashboard from '../dashboard';
import Landing from '../landing';
import AuthRedirect from '../auth-redirect';

class App extends React.Component{
  render(){
    return(
      <div>
        <BrowserRouter>
          <div>
            <Route path='*' component={AuthRedirect}/>
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
