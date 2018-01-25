import React, { Component } from 'react';

let emptyState = {
  meetupMemberId: '',
  name: '',
  phoneNumber: '',
};

class ProfileForm extends Component {
  constructor(props) {
    super(props);

    this.state = props.profile ? props.profile : emptyState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(emptyState);
  }

  componentWillReceiveProps(props) {
    if (props.profile) {
      this.setState(props.profile);
    }
  }

  render() {
    return (
      <form className='profile-form' onSubmit={this.handleSubmit}>
        <input
          name='name'
          placeholder='name'
          type='text'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          name='meetupMemberId'
          placeholder='meetupMemberId'
          type='text'
          value={this.state.meetupMemberId}
          onChange={this.handleChange}
        />
        <input
          name='phoneNumber'
          placeholder='phoneNumber'
          type='text'
          value={this.state.phoneNumber}
          onChange={this.handleChange}
        />
        <button type='submit'>{this.props.profile ? 'update' : 'create'}</button>
      </form>
    );
  }
}

export default ProfileForm;
