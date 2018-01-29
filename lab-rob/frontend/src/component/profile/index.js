import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import ProfileForm from '../profile-form';
import autoBind from '../../lib/auto-bind';
import {createProfileAction, updateProfileAction} from '../../action/profile';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };

    autoBind(this, Profile);
  }

  handleCreate(profile) {
    this.props.createProfile(profile);
  }

  handleUpdate(profile) {
    this.props.updateProfile(profile);
    this.setState({editing: false});
  }

  render() {
    let {
      profile,
    } = this.props;

    let JSXEditing = null, JSXProfile = null, JSXRender = null;

    if(profile) {
      JSXEditing = (
        <Fragment>
          <ProfileForm profile={profile} onComplete={this.handleUpdate} />
          <button onClick={() => this.setState({editing: false})}>Cancel</button>
        </Fragment>
      );

      JSXProfile = (
        <Fragment>
          <p>{profile.bio}</p>
          <button onClick={() => this.setState({editing: true})}>Edit</button>
        </Fragment>
      );

      JSXRender = (
        <Fragment>
          <h3>{profile.username}</h3>
          <h4>{profile.email}</h4>
          {this.state.editing ? JSXEditing : JSXProfile}
        </Fragment>
      );
    }

    return (
      <Fragment>
        <h2>Profile</h2>
        {profile ? JSXRender : <ProfileForm onComplete={this.handleCreate} />}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
});

const mapDispatchToProps = dispatch => ({
  createProfile: (profile) => dispatch(createProfileAction(profile)),
  updateProfile: (profile) => dispatch(updateProfileAction(profile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);