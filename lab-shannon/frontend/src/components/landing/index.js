import React from 'react';
import AuthForm from '../auth-form';
import {connect} from 'react-redux';
import actions from '../../actions/auth';

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
      });
  }

  onLogin(user){
    this.props.doLogin(user)
      .then(() => {
        this.props.history.push('/dashboard');
      });
  }

  render(){
    return (
      <div>
        <AuthForm onComplete={this.onSignup}/>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  token : state.token,
});

let mapDispatchToProps = (dispatch) => ({
  doSignup : (user) => dispatch(actions.signup(user)),
  doLogin : (user) => dispatch(actions.login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
