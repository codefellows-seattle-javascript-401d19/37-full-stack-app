import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import AuthForm from '../auth-form';
import * as authActions from '../../action/auth';

import * as routes from '../../routes';

class Landing extends React.Component{
  constructor(props){
    super(props);
    //-------------------------------------------------------------
    // Binding Handlers
    //-------------------------------------------------------------
    let memberFunctions = Object.getOwnPropertyNames(Landing.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
    //-------------------------------------------------------------
  }
  //---------------------------------------------------------------
  // Member Functions
  //---------------------------------------------------------------
  handleLogin(company){
    this.props.doLogin(company)
      .then(() => {
        this.props.history.push(routes.DASHBOARD_ROUTE);
      })
      .catch(console.error);
  }

  handleSignup(company){
    this.props.doSignup(company)
      .then(() => {
        this.props.history.push(routes.DASHBOARD_ROUTE);
      })
      .catch(console.error);
  }
  //---------------------------------------------------------------
  // Hooks
  //---------------------------------------------------------------
  render(){
    let {location} = this.props;

    let rootJSX = 
      <div>
        <h2> welcome </h2>
        <Link to='/company/signup'> signup </Link>
        <Link to='/company/login'> login </Link>
      </div>;
    
    let signUpJSX = 
      <div>
        <h2> signup </h2>
        <AuthForm onComplete={this.handleSignup} signUpJSX={true}/>
        <p> already have an account? </p>
        <Link to='/company/login'> login </Link>
      </div>;
    
    let loginJSX = 
      <div>
        <h2> login </h2>
        <AuthForm type='login' onComplete={this.handleLogin} />
        <p> Don't have an account? </p>
        <Link to='/company/signup'> signup </Link>
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
  token : state.token,
});

const mapDispatchToProps = (dispatch) => ({
  doSignup : (company) => dispatch(authActions.signupAction(company)),
  doLogin : (company) => dispatch(authActions.loginAction(company)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Landing);