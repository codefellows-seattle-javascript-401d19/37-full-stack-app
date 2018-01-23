import React from 'react';

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
  }
  
  render() {
    let renderEmail = this.props.signup ? 
      <input onChange={this.handleChange} type="email" name='email' placeholder ='email' /> : null;

    let header = this.props.signup ? 'Signup' : 'Login';

    return (
      <div className='auth-form'>
        <h1>{header}</h1>
        <input onChange={this.handleChange} type="username" name='username' placeholder ='username' />
        {renderEmail}
        <input onChange={this.handleChange} type="password" name='password' placeholder ='password' />
      </div>
    );
  }

}

export default AuthForm;