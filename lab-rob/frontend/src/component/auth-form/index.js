import React from 'react';

import autoBind from '../../lib/auto-bind';

let emptyState = {
  username: '',
  email: '',
  password: '',
};

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = emptyState;

    autoBind(this, AuthForm);
  }

  handleChange(event) {
    let {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(emptyState);
  }

  render() {
    let {type} = this.props;

    let signupJSX = (
      <input 
        name='email'
        placeholder='email...'
        type='email'
        value={this.state.email}
        onChange={this.handleChange} 
      />
    );

    let signupRender = type === 'signup' ? signupJSX : null;

    return (
      <form className='auth-form' onSubmit={this.handleSubmit}>
        <input
          name='username'
          placeholder='username...'
          type='text'
          value={this.state.username}
          onChange={this.handleChange}
        />
        
        <input 
          name='password'
          placeholder='password...'
          type='password'
          value={this.state.password}
          onChange={this.handleChange}
        />

        {signupRender}

        <button type='submit'>{type}</button>
      </form>
    );
  }
}

export default AuthForm;