import React from 'react';

import autoBind from '../../lib/auto-bind';

let emptyState = {
  bio: '',
};

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.profile || emptyState;

    autoBind(this, ProfileForm);
  }

  handleChange(event) {
    let {value, name} = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onComplete(this.state);
    this.setState(emptyState);
  }

  componentWillReceiveProps({profile}) { // TODO: Why do we need both this and the state in constructor?
    if(profile)
      this.setState(profile);
  }

  render() {
    let buttonText = this.props.profile ? 'Update' : 'Create';
    return (
      <form 
        className='profile-form'
        onSubmit={this.handleSubmit}
      >
        <textarea
          name='bio'
          value={this.state.bio}
          onChange={this.handleChange}
          placeholder='Bio...'
        />

        <button type='submit'>{buttonText}</button>
      </form>
    );
  }
}

export default ProfileForm;