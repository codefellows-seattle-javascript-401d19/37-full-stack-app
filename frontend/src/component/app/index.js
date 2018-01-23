import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Dashboard from '../dashboard/index';
import AuthForm from '../auth-form';


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
              <Link to='/signup'> Signup </Link>
              <Link to='/login'> Login </Link>
            </nav>
            <Route exact path='/signup' render={() => <AuthForm signup={true}/>} />
            <Route exact path='/login' component={AuthForm} />
          </div>
        </BrowserRouter>
      </div>
    );
  }

  componentWillMount() {
    console.log('MOUNTING DATABASE');
  }

}

let mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(null, mapDispatchToProps)(App);