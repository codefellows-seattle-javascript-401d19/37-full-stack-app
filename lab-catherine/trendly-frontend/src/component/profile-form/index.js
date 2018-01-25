import React from 'react';

let emptyState = {
  meetupMemberId: '',
  name: '',
  phoneNumber: '',
  meetups: '',
};

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.profile ? props.profile : emptyState;

    let memberFunctions = Object.getOwnPropertyNames(ProfileForm.prototype);
    for(let functionName of memberFunctions) {
      if(functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleChange(event) {
    let {name, value} = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(emptyState);
  }

  componentWillReceiveProps(props) {
    if(props.profile)
      this.setState(props.profile);
  }

  render() {
    return (
      <form
        className='profile-form'
        onSubmit={this.handleSubmit}>

        <input 
          onChange={this.handleChange}
          type='text' 
          name='meetupMemberId' 
          placeholder='meetup member id' 
          value={this.state.meetupMemberId}
        />
        <input 
          onChange={this.handleChange}
          type='text' 
          name='phoneNumber' 
          placeholder='888-888-8888' 
          value={this.state.phoneNumber}
        />      
        <input 
          onChange={this.handleChange}
          type='text' 
          name='meetups' 
          placeholder='meetups' 
          value={this.state.meetups}
        /> 
        <textarea
          name='bio'
          value={this.state.bio}
          onChange={this.handleChange}
        />

        <button type='submit'>{this.props.profile ? 'update' : 'create'} profile </button>
      </form>
    );
  }
}

export default ProfileForm;