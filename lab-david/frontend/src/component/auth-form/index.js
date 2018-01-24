import React from 'react';
import validator from 'validator';
// TODO install validator

let emptyState = {
  username: '',
  usernameDirty: false,
  usernameError: 'Hey Username is required',

  email: '',
  emailDirty: false,
  emailError: 'Hey, Email is required',

  password: '',
  passwordDirty: false,
  passwordError: 'Hey, Password is required',
};

class AuthForm extends React.Component {
  constructor(props){
    super(props);
    this.state = emptyState;
    //-------------------------------------------------------------
    // BINDING HANDLES
    //-------------------------------------------------------------
    let memberFunctions = Object.getOwnPropertyNames(AuthForm.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
    //-------------------------------------------------------------
  }
  //-------------------------------------------------------------
  // MEMBER FUNCTIONS
  //-------------------------------------------------------------
  handleChange(event){
    let {name, value} = event.target;
    this.setState({
      [name] : value,
      [`${name}Dirty`] : true, // maps to the above dirty parts of empty state
      [`${name}Error`] : this.handleValidation(name, value),
    });
  }

  handleSubmit(event){
    event.preventDefault();
    let {nameError, emailError, passwordError} = this.state;

    if(this.props.type === 'login' || !nameError && !emailError && passwordError){
      // david - no errors and want to log in - proceed
      this.props.onComplete(this.state);
      this.setState(emptyState);
    } else {
      this.setState({
        // david - if we try to submit form, everything will marked as dirty
        usernameDirty : true,
        emailDirty : true,
        passwordDirty : true,
      });
    }

    this.props.onComplete(this.state);
    this.setState(emptyState);
  }

  handleValidation(name, value) {
    if(this.props.type === 'login')
      return null;

    // TODO : code more rules for each part of the following: 
    switch(name){
      case 'email' : 
        if(!validator.isEmail(value))
          return 'You must provide a valid email';
        return null;
      case 'username' :
        if(value.length < 6)
          return 'Your username must be at least 6 characters';
        return null;
      case 'password' :
        if(value.length < 6)
          return 'Your password must be a least 6 characters';
        return null;
      default :
        return null;
    }
  }

  //-------------------------------------------------------------
  // LIFE CYCLE HOOKS
  //-------------------------------------------------------------

  render(){
    let { type } = this.props;

    type = type === 'login' ? type : 'signup';

    let signupJSX =
      <div>
        {this.state.emailDirty ? <p>{this.state.emailError}</p> : undefined}
        <input
          className={this.state.emailDirty && this.state.emailError ? 'invalid' : undefined}
          name='email'
          placeholder='Your Email'
          type='email'
          value={this.state.email}
          onChange={this.handleChange}
        />
      </div>;

    let signupRenderedJSX = ( type !== 'login') ? signupJSX : undefined;


    // TODO : need to add password field below I think - per code
    return (
      <form className='auth-form' noValidate onSubmit={this.handleSubmit} >

        {this.state.usernameDirty ? <p>{this.state.usernameError}</p> : undefined}

        <input
          className={this.state.usernameDirty && this.state.usernameError ? 'invalid' : undefined}
          name='username'
          placeholder='Your Username'
          type='text'
          value={this.state.username}
          onChange={this.handleChange}
        />

        <button type='submit'> {type} </button>
      </form>
    );
  }
}

export default AuthForm;