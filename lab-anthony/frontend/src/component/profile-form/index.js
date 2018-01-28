import React from 'react';

let emptyState = {
  bio: '',
};

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.profile ? props.profile : emptyState;

    //binding handlers

    let memberFunctions = Object.getOwnPropertyNames(ProfileForm.prototype);
    for(let functionName of memberFunctions) {
      if(functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  //member functions

  handleChange(event) {
    let {value} = event.target;
    this.setState({
      bio: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(emptyState);
  }

  //hooks

  componentWillReceiveProps(props) {
    if(props.profile)
      this.setState(props.profile);
  }

  render() {
    return (
      <form
        className='profile-form'
        onSubmit={this.handleSubmit}>

        <textarea
          name='bio'
          value={this.state.bio}
          onChange={this.handleChange}
        />

        <button type='submit'> {this.props.profile ? 'update' : 'create'} profile </button>
      </form>
    );
  }
}
export default ProfileForm;
