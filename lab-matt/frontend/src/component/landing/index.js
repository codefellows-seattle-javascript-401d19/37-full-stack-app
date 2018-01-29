import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import AuthForm from '../auth-form';
import { signupAction, loginAction } from '../../action/auth';

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogin = (user) => {
      this.props.logMeIn(user)
        .then(() => {
          this.props.history.push('/dashboard');
        })
        .catch(console.error);
    };

    this.handleSignup = (user) => {
      this.props.signMeUp(user)
        .then(() => {
          this.props.history.push('/dashboard');
        })
        .catch(console.error);
    };
  }

  render() {
    let { location } = this.props;
    let { pathname } = location;

    let root = 
      <div className='root'>
        <Link to='/signup' > signup </Link>
        <Link to='/login' > login </Link>
      </div>;

    let signup = 
    <div className='signup'>
        <h2> signup </h2>
        <AuthForm onComplete={this.handleSignup} signup={true}/>
        <p> already have an account? </p>
        <Link to='/login' > login </Link>
      </div>;
      
    let login = 
      <div className='login'>
        <h2> login </h2>
        <AuthForm onComplete={this.handleLogin} />
        <p> don't have an account? </p>
        <Link to='/signup' > signup </Link>
      </div>;

    return(
      <div className='landing'>
        {pathname === '/' ? root : undefined}
        {pathname === '/signup' ? signup : undefined}
        {pathname === '/login' ? login : undefined}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  token : state.token,
});

let mapDispatchToProps = (dispatch) => {
  return {
    signMeUp : (user) => dispatch(signupAction(user)),
    logMeIn : (user) => dispatch(loginAction(user)),
  };
};

export default connect(null, mapDispatchToProps)(Landing);
