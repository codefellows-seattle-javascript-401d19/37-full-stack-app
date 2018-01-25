import React, { Component } from 'react';
import validator from 'validator';

let emptyState = {
  username: '',
  usernameDirty: false,
  usernameError: 'Username is required',

  email: '',
  emailDirty: false,
  emailError: 'Email is reqired',

  password: '',
  passwordDirty: false,
  passwordError: 'Password is required',

  submitted: false,
};

class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = emptyState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
      [`${name}Dirty`]: true,
      [`${name}Error`]: this.handleValidation(name, value),
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let { nameError, emailError, passwordError } = this.state;

    if (this.props.type === 'login' || !nameError && !emailError && !passwordError) {
      this.props.onComplete(this.state);
      this.setState(emptyState);
    } else {
      this.setState({
        usernameDirty: true,
        emailDirty: true,
        passwordDirty: true,
        submitted: true,
      });
    }
  }

  handleValidation(name, value) {
    if (this.props.type === 'login') {
      return null;
    }

    switch (name) {
      case 'username':
        if (value.length < 6) {
          return 'Your name must be at least 6 characters long';
        }
        return null;
      case 'email':
        if (!validator.isEmail(value)) {
          return 'You must provide a valid email';
        }
        return null;
      case 'password':
        if (value.length < 8) {
          return 'Your name must be at least 8 characters long';
        }
        return null;
      default:
        return null;
    }
  }

  render() {
    let { type } = this.props;

    type = type === 'login' ? type : 'signup';

    const signupJSX =
      <div>
        { this.state.emailDirty ? <p>{this.state.emailError}</p> : undefined }
        <input
          className={this.state.emailDirty && this.state.emailError ? 'invalid' : undefined}
          name='email'
          placeholder='email'
          type='email'
          value={this.state.email}
          onChange={this.handleChange}
        />
      </div>;

    const signupRenderedJSX = ( type !== 'login') ? signupJSX : undefined;

    return (
      <form className='auth-form' noValidate onSubmit={this.handleSubmit}>

        { this.state.usernameDirty ? <p>{this.state.usernameError}</p> : undefined }

        <input
          className={this.state.usernameDirty && this.state.usernameError ? 'invalid' : undefined}
          name='username'
          placeholder='username'
          type='text'
          value={this.state.username}
          onChange={this.handleChange}
        />

        { signupRenderedJSX }

        { this.state.passwordDirty ? <p>{this.state.passwordError}</p> : undefined }

        <input
          className={this.state.passwordDirty && this.state.passwordError ? 'invalid' : undefined}
          name='password'
          placeholder='password'
          type='text'
          value={this.state.password}
          onChange={this.handleChange}
        />

        <button type='submit'>{ type }</button>
      </form>
    );
  }
}

export default AuthForm;
