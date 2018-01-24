import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import AuthForm from '../auth-form';
import * as authActions from '../../action/auth';

import * as routes from '../../routes';

class Landing extends React.Component{
  constructor(props){
    super(props);

    let memberFunctions = Object.getOwnPropertyNames(Landing.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleLogin(user){
    this.props.handleLogin(user)
      .then(() => {
        this.props.history.push(routes.DASHBOARD_ROUTE);
      })
      .catch(console.error);
  }

  handleSignup(user){
    this.props.handleSignup(user)
      .then(() => {
        this.props.history.push(routes.DASHBOARD_ROUTE);
      })
      .catch(console.error);
  }

  render(){
    let {
      location,
    } = this.props;

    let rootJSX =
      <div>
        <h2> Welcome to the FullStack Experience </h2>
        <Link to='/signup'> sign up </Link>
        <Link to='/login'> login </Link>
      </div>;

    let signUpJSX =
      <div>
        <h2> Sign Up </h2>
        <AuthForm handleComplete={this.handleSignup} />
        <p> already have an account? </p>
        <Link to='/login'> login </Link>
      </div>;

    let loginJSX =
      <div>
        <h2> Login </h2>
        <AuthForm type='login' handleComplete={this.handleLogin} />
        <p> Need to make a new account? </p>
        <Link to='/signup'> sign up </Link>
      </div>;

    return(
      <div className="landing">
        {location.pathname === routes.ROOT_ROUTE ? rootJSX : undefined}
        {location.pathname === routes.SIGNUP_ROUTE ? signUpJSX : undefined}
        {location.pathname === routes.LOGIN_ROUTE ? loginJSX : undefined}
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  token : state.token,
});

let mapDispatchToProps = (dispatch) => {
  return{
    handleSignup: (user) => dispatch(authActions.signupAction(user)),
    handleLogin: (user) => dispatch(authActions.loginAction(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
