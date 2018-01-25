import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AuthForm from '../auth-form';
import * as authActions from '../../action/auth';
import * as clientProfile from '../../action/client-profile';

import * as routes from '../../routes';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }


  handleLogin(profile) {
    this.props.doLogin(profile)
      .then(() => {
        this.props.fetchClientProfile();
        this.props.history.push(routes.DASHBOARD_ROUTE);
      })
      .catch(console.error);

  }

  handleSignup(profile) {
    this.props.doSignup(profile)
      .then(() => {
        this.props.history.push(routes.DASHBOARD_ROUTE);
      })
      .catch(console.error);
  }

  render() {
    const { location } = this.props;

    const rootJSX =
      <div>
        <h2>Welcome</h2>
        <Link to='/signup'>signup</Link>
        <Link to='/login'>login</Link>
      </div>;

    const signUpJSX =
      <div>
        <h2>Signup</h2>
        <AuthForm onComplete={this.handleSignup} />
        <p>already have an account?</p>
        <Link to='/login'>login</Link>
      </div>;

    const loginJSX =
      <div>
        <h2>login</h2>
        <AuthForm type='login' onComplete={this.handleLogin} />
        <p>Dont have an account?</p>
        <Link to='/signup'>signup</Link>
      </div>;

    return (
      <div className='landing'>
        {location.pathname === routes.ROOT_ROUTE ? rootJSX : undefined}
        {location.pathname === routes.SIGNUP_ROUTE ? signUpJSX : undefined}
        {location.pathname === routes.LOGIN_ROUTE ? loginJSX : undefined}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: state.token,
});

const mapDispatchToProps = dispatch => ({
  doSignup: profile => dispatch(authActions.signupAction(profile)),
  doLogin: profile => dispatch(authActions.loginAction(profile)),
  fetchClientProfile: () => dispatch(clientProfile.fetchAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
