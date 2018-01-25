import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from '../header';
import Landing from '../landing';
import Favorites from '../favorites';
import Dashboard from '../dashboard';
import AuthRedirect from '../auth-redirect';

class App extends React.Component {
  render(){
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <Header/>
            <Route path='*' component={AuthRedirect}/>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/signup' component={Landing}/>
            <Route exact path='/login' component={Landing}/>
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route exact path='/favorites' component={Favorites} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;