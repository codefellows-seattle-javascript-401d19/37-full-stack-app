import React from 'react';
import validator from 'validator';

let emptyState = {
  companyName: '',
  companyNameDirty: false,
  companyNameError: 'company name is required',

  password: '',
  passwordDirty: false,
  passwordError: 'password is required',

  website: '',
  websiteDirty: false,
  websiteError: 'website is required',

  email: '',
  emailDirty: false,
  emailError: 'email is required',

  phoneNumber: '',
  phoneNumberDirty: false,
  phoneNumberError: 'phone number is required',
};

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = emptyState;

    let memberFunctions = Object.getOwnPropertyNames(AuthForm.prototype);
    for(let functionName of memberFunctions) {
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  // changed this to include dirty and error

  handleChange(event) {
    let {name, value} = event.target;

    this.setState({
      [name]: value,
      [`${name}Dirty`]: true,
      [`${name}Error`]: this.handleValidation(name, value),
    });
  }

  //TODO: add validation error handling to submit

  handleSubmit(event){
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(emptyState);
  }

  handleValidation(name, value){
    if(this.props.type === 'login')
      return null;

    // TODO: add validation

    switch(name){
    case 'companyName':
    case 'password':
    case 'website':
    case 'email':
    case 'phoneNumber':
    }
  }

  render(){
    let { type } = this.props;

    type = type === 'login' ? type : 'signup';

    let signupJSX =
      <input
        name='email'
        placeholder='email'
        type='email'
        value={this.state.email}
        onChange={this.handleChange}
      />;

    let signupRenderedJSX = (type !== 'login') ? signupJSX : undefined;

    return (
      <form className='auth-form' onSubmit={this.handleSubmit} >

        <input
          name='companyName'
          placeholder='companyName'
          type='text'
          value={this.state.companyName}
          onChange={this.handleChange}
        />

        {signupRenderedJSX}

        <input
          name='password'
          placeholder='password'
          type='password'
          value={this.state.password}
          onChange={this.handleChange}
        />

        <button type='submit'> {type} </button>
      </form>
    );
  }
}

export default AuthForm;
