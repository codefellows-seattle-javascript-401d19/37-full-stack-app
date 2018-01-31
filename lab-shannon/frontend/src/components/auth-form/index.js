import React from 'react';

let emptyState = {
  username: '',
  email: '',
  password: '',
};

class AuthForm extends React.Component{
  constructor(props){
    super(props);
    this.state = emptyState;
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(event){
    let {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(emptyState);
  }

  render(){
    let {type} = this.props;
    type = type === 'login' ? type : 'signup';

    let signUpJSX =
      <input
        name='email'
        type='text'
        value={this.state.email}
        placeholder='email'
        onChange={this.onChange}
      />;

    let renderedJSX = (type !== 'login') ? signUpJSX : undefined;

    return(
      <form onSubmit={this.handleSubmit}>
        <input
          name='username'
          type='text'
          value={this.state.username}
          placeholder='username'
          onChange={this.onChange}
        />

        {renderedJSX}

        <input
          name='password'
          type='password'
          value={this.state.password}
          placeholder='password'
          onChange={this.onChange}
        />
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default AuthForm;
