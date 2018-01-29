import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import AuthForm from '../auth-form';
import * as authActions from '../../action/auth';
import * as clientProfile from '../../action/client-profile';
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
    this.props.doLogin(user)
      .then(() => {
        this.props.fetchClientProfile();
        this.props.history.push(routes.DASHBOARD_ROUTE);
      })
      .catch(console.error);
  }

  handleSignup(user){
    this.props.doSignup(user)
      .then(() => {
        this.props.history.push(routes.PROFILE_ROUTE);
      })
      .catch(console.error);
  }

  render() {
    let {location} = this.props;

    let rootJSX = 
      <div>
        <h2> Welcome to the Landing </h2>
      </div>;

    let signupJSX = 
      <div>
        <h2> Signup </h2>
        <AuthForm type='signup' onComplete={this.handleSignup} />
        <h2> Need to Login? </h2>
        <Link to='/login' >Login </Link>
      </div>;

    let loginJSX = 
      <div>
        <h2> Login </h2>
        <AuthForm type='login' onComplete={this.handleLogin} />
        <h2> Need an account? </h2>
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
  doSignup : (user) => dispatch(authActions.signupAction(user)),
  doLogin : (user) => dispatch(authActions.loginAction(user)),
  fetchClientProfile : () => dispatch(clientProfile.fetchAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
