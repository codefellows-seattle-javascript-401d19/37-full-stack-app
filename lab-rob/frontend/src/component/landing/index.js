import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import autoBind from '../../lib/auto-bind';
import AuthForm from '../auth-form';
import {signupAction, loginAction} from '../../action/auth';
import {LOGIN_ROUTE, SIGNUP_ROUTE, ROOT_ROUTE, DASHBOARD_ROUTE} from '../../routes';

class Landing extends React.Component {
  constructor(props) {
    super(props);

    autoBind(this, Landing);
  }

  handleLogin(user) {
    this.props.loginUser(user)
      .then(() => {
        this.props.history.push(DASHBOARD_ROUTE);
      })
      .catch(console.error);
  }

  handleSignup(user) {
    this.props.signupUser(user)
      .then(() => {
        this.props.history.push(DASHBOARD_ROUTE);
      })
      .catch(console.error);
  }

  render() {
    let {pathname} = this.props.location;

    let rootJSX = (
      <div>
        <h2>Welcome!</h2>
        <Link to={SIGNUP_ROUTE}>Signup</Link> 
        <Link to={LOGIN_ROUTE}>Login</Link> 
      </div>
    );

    let signupJSX = (
      <div>
        <h2>Signup</h2>
        <AuthForm type='signup' onComplete={this.handleSignup} />
        <p>Already have an account? <Link to={LOGIN_ROUTE}>Login</Link>  instead.</p>
      </div>
    );

    let loginJSX = (
      <div>
        <h2>Login</h2>
        <AuthForm type='login' onComplete={this.handleLogin} />
        <p>Need an account? <Link to={SIGNUP_ROUTE}>Signup</Link>  instead.</p>
      </div>
    );

    let renderJSX = pathname === ROOT_ROUTE ? 
      rootJSX : pathname === SIGNUP_ROUTE ? 
        signupJSX : loginJSX;

    return (
      <div className='landing'>
        {renderJSX}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signupUser: (user) => dispatch(signupAction(user)),
  loginUser: (user) => dispatch(loginAction(user)),
});

export default connect(null, mapDispatchToProps)(Landing);