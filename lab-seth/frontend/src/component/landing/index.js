import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import AuthForm from '../auth-form';
import * as authActions from '../../action/auth';
import * as routes from '../../routes';

import './landing.scss';

class Landing extends React.Component{
    constructor(props){
      super(props);

    let memberFunctions = Object.getOwnPropertyNames(Landing.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleLogin(user){
    this.props.completeLogin(user)
      .then(() => {
        this.props.history.push(routes.DASHBOARD_ROUTE);
      })
      .catch(console.error);
  }

  handleSignup(user){
    this.props.completeSignup(user)
      .then(() => {
        this.props.history.push(routes.DASHBOARD_ROUTE);
      })
      .catch(console.error);
  }

  render() {
    let {location} = this.props;

    let rootJSX = 
      <div>
        <h2> Welcome </h2>
        <p><Link to='/signup'> Signup </Link></p>
        <p><Link to='/login'> Login </Link></p>
      </div>;

    let signupJSX = 
      <div>
        <h2> Signup </h2>
        <AuthForm onComplete={this.handleSignup} />
        <h2> Login </h2>
        <Link to='/login' >Login </Link>
      </div>;

    let loginJSX = 
      <div>
        <h2> Login </h2>
        <AuthForm onComplete={this.handleLogin} />
        <h2> Signup </h2>
        <Link to='/signup' >Signup </Link>
      </div>;
      

    return (
      <div className='landing'>
        {location.pathname === routes.ROOT_ROUTE ? rootJSX :undefined}
        {location.pathname === routes.SIGNUP_ROUTE ? signupJSX :undefined}
        {location.pathname === routes.LOGIN_ROUTE ? loginJSX :undefined}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    token : state.token,
});

const mapDispatchToProps = (dispatch) => ({
  completeSignup : (user) => dispatch(authActions.signupAction(user)),
  completeLogin : (user) => dispatch(authActions.loginAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
