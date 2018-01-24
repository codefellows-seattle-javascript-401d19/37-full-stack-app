import React from 'react';
import { signupAction, loginAction } from '../../action/auth';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

let emptystate = {
  username: '',
  email: '',
  password: '',
};

class AuthForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = emptystate;

    this.handleChange = (event) => {
      let { name, value } = event.target;
      this.setState({ [name] : value });
    }
    this.handleSubmit = (e) => {
      e.preventDefault();

      if (this.props.signup) {
        this.props.signMeUp(this.state);
      } else {
        this.props.logMeIn(this.state);
      }
    };
  }
  
  render() {
    let renderEmail = this.props.signup ? 
      <input onChange={this.handleChange} type="email" name='email' placeholder ='email' /> : null;

    let header = this.props.signup ? 'Signup' : 'Login';

    return (
      <form className='auth-form' onSubmit={this.handleSubmit}>
        <h1>{header}</h1>
        <input onChange={this.handleChange} type="username" name='username' placeholder ='username' />
        {renderEmail}
        <input onChange={this.handleChange} type="password" name='password' placeholder ='password' />
        <button type="submit"> {header.toLowerCase()} </button>
      </form>
    );
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

export default connect(null, mapDispatchToProps)(AuthForm);