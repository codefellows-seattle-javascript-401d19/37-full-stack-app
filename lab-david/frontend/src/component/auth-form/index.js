import React from 'react';

let emptyState = {
  username: '',
  email: '',
  password: '',
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
    this.setState({[name] : value });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(emptyState);
  }

  //-------------------------------------------------------------
  // LIFE CYCLE HOOKS
  //-------------------------------------------------------------

  render(){
    let { type } = this.props;

    type = type === 'login' ? type : 'signup';

    let signupJSX =
      <input
        name='email'
        placeholder='Your Email'
        type='email'
        value={this.state.email}
        onChange={this.handleChange}
      />;

    let signupRenderedJSX = ( type !== 'login') ? signupJSX : undefined;

    return (
      <form className='auth-form' onSubmit={this.handleSubmit} >

        <input
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