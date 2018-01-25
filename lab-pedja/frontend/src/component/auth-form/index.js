import React from "react";

let emptyState = {
  companyName : '',
  email : '',
  password : '',
  website : '',
  phoneNumber : '',
};

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = emptyState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    let {name, value} = event.target;
    this.setState({ [name] : value });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(emptyState);
  }

  render() {
    let { type } = this.props;

    let signupJSX = 
      <div>
        <input 
          name = 'email'
          placeholder = 'email'
          type = 'email'
          value = {this.state.email}
          onChange = {this.handleChange}
        />
        <input 
          name = 'phoneNumber'
          placeholder = 'phone number'
          type = 'text'
          value = {this.state.phoneNumber}
          onChange = {this.handleChange}
        />
        <input 
          name = 'website'
          placeholder = 'website'
          type = 'text'
          value = {this.state.website}
          onChange = {this.handleChange}
        />

      </div>;

    let signupRenderJSX = type == 'signup' ? signupJSX : undefined;

    return (
      <form className='auth-form' onSubmit={this.handleSubmit} >
        <input 
          name = 'companyName'
          placeholder = 'companyName'
          type = 'text'
          value = {this.state.companyName}
          onChange = {this.handleChange}
        />

        {signupRenderJSX}

        <input 
          name = 'password'
          placeholder = 'password'
          type = 'password'
          value = {this.state.password}
          onChange = {this.handleChange}
        />
        <button type='submit'> {type} </button>
      </form>
    );
  }
}

export default AuthForm;