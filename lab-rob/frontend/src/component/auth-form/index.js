import React, {Fragment} from 'react';
import validator from 'validator';

import autoBind from '../../lib/auto-bind';

let emptyState = {
  username: '',
  usernameDirty: false,
  usernameError: 'Username is required.',

  email: '',
  emailDirty: false,
  emailError: 'Email is required.',

  password: '',
  passwordDirty: false,
  passwordError: 'Password is required.',

  submitted: false,
};

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = emptyState;

    autoBind(this, AuthForm);
  }

  handleChange(event) {
    let {name, value} = event.target;
    this.setState({
      [name]: value,
      [`${name}Dirty`]: true,
      [`${name}Error`]: this.handleValidation(name, value),
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    let {usernameError, emailError, passwordError} = this.state;
    let inputError = usernameError || emailError || passwordError;

    if(this.props.type === 'login' || !inputError) {
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
    if(this.props.type === 'login')
      return null;

    switch(name) {
      case 'username':
        if(value.length === 0)
          return 'Username is required.';
        if(value.length < 6)
          return 'Username must be at least 6 characters.';
        if((/\W/g).test(value))
          return 'Username may only contain numbers and letters.';
        return null;
      case 'email':
        if(value.length === 0)
          return 'Email address is required.';
        if(!validator.isEmail(value))
          return 'Please provide a valid email';
        return null;
      case 'password':
        if(value.length === 0)
          return 'Password is required.';
        if(value.length < 6)
          return 'Password must be at least 6 characters.';
        if(!((/[a-z]/g).test(value) && (/\d/g).test(value)))
          return 'Password must contain at least 1 letter and 1 number.';
        return null;
      default:
        return null;
    }
  }

  render() {
    let {type} = this.props;

    let signupJSX = (
      <Fragment>
        <input
          className={this.state.emailDirty && this.state.emailError ? 'error' : null}
          name='email'
          placeholder='email...'
          type='text'
          value={this.state.email}
          onChange={this.handleChange} 
        />
        {this.state.emailDirty ? <p>{this.state.emailError}</p> : null}
      </Fragment>
    );

    let signupRender = type === 'signup' ? signupJSX : null;

    return (
      <form className='auth-form' onSubmit={this.handleSubmit}>
        <input
          className={this.state.usernameDirty && this.state.usernameError ? 'error' : null}
          name='username'
          placeholder='username...'
          type='text'
          value={this.state.username}
          onChange={this.handleChange}
        />
        {this.state.usernameDirty ? <p>{this.state.usernameError}</p> : null}
        
        <input
          className={this.state.passwordDirty && this.state.passwordError ? 'error' : null}
          name='password'
          placeholder='password...'
          type='password'
          value={this.state.password}
          onChange={this.handleChange}
        />
        {this.state.passwordDirty ? <p>{this.state.passwordError}</p> : null}

        {signupRender}

        <button type='submit'>{type}</button>
      </form>
    );
  }
}

export default AuthForm;