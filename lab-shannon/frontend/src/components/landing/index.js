import React from 'react';
import AuthForm from '../auth-form';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as authActions from '../../actions/auth';
import * as profileActions from '../../actions/profile';

class Landing extends React.Component{
  constructor(props){
    super(props);
    this.onSignup = this.onSignup.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  onSignup(user){
    this.props.doSignup(user)
      .then(() => {
        this.props.history.push('/dashboard');
      })
      .catch(console.error);
  }

  onLogin(user){
    this.props.doLogin(user)
      .then(() => {
        this.props.getUserProfile();
        this.props.history.push('/dashboard');
      })
      .catch(console.error);
  }

  render(){
    let {location} = this.props;

    let rootJSX =
      <div>
        <h2>Welcome</h2>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/login'>Login</Link>
      </div>;

    let signUpJSX =
      <div>
        <h2>Thank you for signing up!</h2>
        <AuthForm onComplete={this.onSignup}/>
        <p>Already have an account?</p>
        <Link to='/login'>Login</Link>
      </div>;

    let loginJSX =
      <div>
        <h2>Please login below</h2>
        <AuthForm type={'login'} onComplete={this.onLogin} />
        <p>Need to create an account?</p>
        <Link to='/signup'>Sign Up</Link>
      </div>;

    return (
      <div>
        {location.pathname === '/' ? rootJSX : undefined}
        {location.pathname === '/signup' ? signUpJSX : undefined}
        {location.pathname === '/login' ? loginJSX : undefined}
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  token : state.token,
});

let mapDispatchToProps = (dispatch) => ({
  doSignup : (user) => dispatch(authActions.signup(user)),
  doLogin : (user) => dispatch(authActions.login(user)),
  getUserProfile : () => dispatch(profileActions.getProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
