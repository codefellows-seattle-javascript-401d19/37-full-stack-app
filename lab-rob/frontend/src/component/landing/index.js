import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import AuthForm from '../auth-form';
import autoBind from '../../lib/auto-bind';
import {signupAction, loginAction} from '../../action/auth';

class Landing extends React.Component {
  constructor(props) {
    super(props);

    autoBind(this, Landing);
  }

  handleLogin(user) {
    this.props.loginUser(user)
      .then(() => {
        this.props.history.push('/profile');
      })
      .catch(console.error);
  }

  handleSignup(user) {
    this.props.signupUser(user)
      .then(() => {
        this.props.history.push('/profile');
      })
      .catch(console.error);
  }

  render() {
    let {pathname} = this.props.location;

    let rootJSX = (
      <div>
        <h2>Welcome!</h2>
        <Link to={'/signup'}>Signup</Link> or <Link to={'/login'}>Login</Link> to continue!
      </div>
    );

    let signupJSX = (
      <div>
        <h2>Signup</h2>
        <AuthForm type='signup' onComplete={this.handleSignup} />
        <p>Already have an account? <Link to={'/login'}>Login</Link> instead.</p>
      </div>
    );

    let loginJSX = (
      <div>
        <h2>Login</h2>
        <AuthForm type='login' onComplete={this.handleLogin} />
        <p>Need an account? <Link to={'/signup'}>Signup</Link> instead.</p>
      </div>
    );

    let renderJSX = pathname === '/' ? 
      rootJSX : pathname === '/login' ? 
        loginJSX : signupJSX;

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