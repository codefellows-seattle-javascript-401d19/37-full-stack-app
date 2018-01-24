import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import AuthForm from "../auth-form";
import * as authActions from "../../action/auth ";
import * as routes from "../../routes";

class Landing extends React.Component {
  constructor(props){
    super(props);

    this.handleSignup = this.handleSignup.bind(this);    
    this.handleLogin = this.handleLogin.bind(this);    
  }

  handleSignup(user){
    this.props.doSignup(user)
      .then(() => {
        this.props.history.push(routes.DASHBOARD_ROUTE);
      })
      .catch(console.error);
  }

  handleLogin(user){
    this.props.doLogin(user)
      .then(() => {
        this.props.history.push(routes.DASHBOARD_ROUTE);
      })
      .catch(console.error);
  }

  render() {
    let {location} = this.props;

    let rootJSX = 
      <div>
        <h2> welcome </h2>
        <Link to='/signup'> signup </Link>
        <Link to='/login'> login </Link>
      </div>;

    let signUpJSX = 
      <div>
        <h2> signup </h2>
        <AuthForm onComplete={this.handleSignup}/>
        <p> already have an account? </p>
        <Link to='/login'> login </Link>
      </div>;

    let loginJSX = 
    <div>
      <h2> login </h2>
      <AuthForm onComplete={this.handleLogin}/>
      <p> Do you want to signup? </p>
      <Link to='/signup'> signup </Link>
    </div>;

    return (
      <div className='landing'>
        {location.pathname === routes.ROOT_ROUTE ? rootJSX : undefined}
        {location.pathname === routes.LOGIN_ROUTE ? loginJSX : undefined}
        {location.pathname === routes.SIGNUP_ROUTE ? signUpJSX : undefined}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token : state.token,
});

const mapDispatchToProps = dispatch => ({
  doSignup : user => dispatch(authActions.signupAction(user)),
  doLogin : user => dispatch(authActions.loginAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);