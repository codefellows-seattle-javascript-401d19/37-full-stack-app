import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Dashboard from '../dashboard';
import Landing from '../landing';
import AuthForm from '../auth-form';
import AuthRedirect from '../auth-redirect';


class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1.0" 
        />
        <BrowserRouter>
          <div>
            <nav>
              <Link to='/'> Home </Link>
            </nav>
            <Route exact path='*' component={AuthRedirect} />
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