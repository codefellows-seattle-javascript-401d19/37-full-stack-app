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
      this.props.onComplete(this.state);
    };
  }
  
  render() {
    let renderEmail = this.props.signup ? 
      <input onChange={this.handleChange} type="email" name='email' placeholder ='email' /> : null;

    let header = this.props.signup ? 'Signup' : 'Login';

    return (
      <form className='auth-form' onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type="username" name='username' placeholder ='username' />
        {renderEmail}
        <input onChange={this.handleChange} type="password" name='password' placeholder ='password' />
        <button type="submit"> {header.toLowerCase()} </button>
      </form>
    );
  }
}

export default AuthForm;