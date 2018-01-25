// import './_auth-form.scss';
import React from 'react';
import validator from 'validator';

let emptyState = {
  username: '',
  usernameDirty: false,
  usernameError: 'Username is required',

  email: '',
  emailDirty: false,
  emailError: 'Email is required',

  password: '',
  passwordDirty: false,
  passwordError: 'Password is required',
};

class AuthForm extends React.Component{
  constructor(props){
    super(props);
    this.state = emptyState;

    let memberFunctions = Object.getOwnPropertyNames(AuthForm.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }


  handleChange(event){
    let {name, value} = event.target;
    this.setState({
      [name] : value,
      [`${name}Dirty`] : true,
      [`${name}Error`] : this.handleValidation(name, value),
    });
  }

  handleSubmit(event){
    event.preventDefault();
    let {nameError, emailError, passwordError} = this.state;

    if(this.props.type === 'login' || !nameError && !emailError && !passwordError){
      this.props.handleComplete(this.state);
      this.setState(emptyState);
    } else {
      this.setState({
        usernameDirty : true,
        emailDirty : true,
        passwordDirty : true,
      });

    }
  }

  handleValidation(name, value){
    if(this.props.type == 'login')
      return null;
    switch(name){
      case 'username':
        if(value.length < 6)
          return 'username must more than 6 characters long';
        return null;
      case 'email':
        if(!validator.isEmail(value))
          return 'must be a valid email';
        return null;
      case 'password':
        if(value.length < 8)
          return 'password must be at least 8 characters';
        return null;
      default:
        return null;
    }
  }

  render() {
    let {type} = this.props;
    type = type === 'login' ? type : 'signup';

    let signupJSX =
    <input
      name = 'email'
      placeholder = 'email'
      type = 'email'
      value = {this.state.email}
      onChange = {this.handleChange}
    />;

    let signupRenderedJSX = (type !== 'login') ? signupJSX : undefined;


    return(
      <form
        onSubmit = {this.handleSubmit}
        noValidate
        className = "auth-form">

        {this.state.usernameDirty ? <p>{this.state.passwordError} </p> : undefined}

        <input
          type="text"
          name="username"
          placeholder="username"
          value={this.state.username}
          onChange={this.handleChange}
          required={true}
        />


        {signupRenderedJSX}

        {this.state.passwordDirty ? <p>{this.state.passwordError} </p> : undefined}
        <input
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handleChange}
          required={true}
        />
        <button type='submit' onClick={this.handleSubmit}> {type} </button>

      </form>
    );
  }
}

export default AuthForm;
