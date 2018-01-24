import React from 'react';

let emptyState = {
  companyName: '',
  password: '',
  website: '',
  email: '',
  phoneNumber: '',
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

  handleChange(event) {
    let {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(emptyState);
  }

  render(){
    let { type } = this.props;

    type = type === 'login' ? type : 'signup';

    let signupJSX =
    <div>
      <input
        name='website'
        placeholder='website'
        type='text'
        value={this.state.website}
        onChange={this.handleChange}
      />
      <input
        name='email'
        placeholder='email'
        type='email'
        value={this.state.email}
        onChange={this.handleChange}
      />
      <input
        name='phoneNumber'
        placeholder='phone number'
        type='text'
        value={this.state.phoneNumber}
        onChange={this.handleChange}
      />
    </div>;


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
