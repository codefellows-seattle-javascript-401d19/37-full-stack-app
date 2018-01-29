import React from 'react';

let emptyState = {
  bio: '',
  bioDirty: false,
  bioError: '',
  avatar: 'URL',
};

class ProfileForm extends React.Component {
  constructor(props){
    super(props);
    this.state = props.profile ? props.profile : emptyState;

    let memberFunctions = Object.getOwnPropertyNames(ProfileForm.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleChange(event){
    let { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(emptyState)
  }

  componentWillReceiveProps(props){
    if(props.profile) this.setState(props.profile)
  }

  render(){
    return(
      <form
        className='profile-form'
        onSubmit={this.handleSubmit}>

        <input
          name='avatar'
          placeholder='Enter an image URL here'
          type='text'
          value={this.state.avatar}
          onChange={this.handleChange}
        />
        <br></br>

        <textarea
          name='bio'
          placeholder='Fill out a basic profile here!'
          value={this.state.bio}
          onChange={this.handleChange}
        />

        <button type='submit'> {this.props.profile ? 'Update' : 'Create'} Profile </button>
      </form>
    )
  }
}

export default ProfileForm;