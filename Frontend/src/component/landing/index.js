import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import AuthForm from '../auth-form';
import * as authActions from '../../action/auth';
import * as clientProfile from '../../action/client-profile';

import * as routes from '../../routes';


class Landing extends React.Component {
  constructor(props) {
    super(props);

    let memberFunctions = Object.getOwnPropertyNames(Landing.prototype);
    for(let functionName of memberFunctions) {
      if(functionName.startsWith('handle')) {
        this[functionName] =this[functionName].bind(this);
      }
    }
  }

  handleLogin(user) {
    this.props.doLogin(user)
      .then (() => {
        this.props.fetchClientProfile();
        this.props.history.push(routes.PROFILES_ROUTE);
      })
      .catch(console.error);
  }

  handleSignup(user) {
    this.props.doSignup(user)
      .then(() => {
        this.props.history.push(routes.PROFILES_ROUTE);
      })
      .catch(console.error);
  }

  render() {
    let {location} = this.props;

    let rootJSX = 
		<div>
		  <h2>Welcome to SlugGram.</h2>
		  <Link to='/signup'> Sign Up </Link>
		  <Link to='/login'> Log In </Link>
		</div>;

    let signUpJSX = 
			<div>
			  <h2>Sign Up</h2>
			  <AuthForm type='signup' onComplete={this.handleSignup} />
			  <p>Already have an account?</p>
			  <Link to='/login'> Log In </Link>
			</div>;

    let loginJSX = 
			<div>
			  <h2>Log In</h2>
			  <AuthForm type='login' onComplete={this.handleLogin} />
			  <p>Don't have an account?</p>
			  <Link to='/signup'> Sign Up </Link>
			</div>;

    return(
      <div className='landing'>
        {location.pathname === routes.ROOT_ROUTE ? rootJSX : undefined}
        {location.pathname === routes.SIGNUP_ROUTE ? signUpJSX : undefined}
        {location.pathname === routes.LOGIN_ROUTE ? loginJSX : undefined}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
});

const mapDispatchToProps = (dispatch) => ({
  doSignup: (user) => dispatch(authActions.signupAction(user)),
  doLogin: (user) => dispatch(authActions.loginAction(user)),
  fetchClientProfile: () => dispatch(clientProfile.fetchAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);