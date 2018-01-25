import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileForm from '../profile-form';

import * as clientProfile from '../../action/client-profile';
import * as routes from '../../routes';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };

    this.handleCreate = this.handleCreate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleCreate(profile) {
    this.props.profileCreate(profile)
      .then(() => {
        return this.props.history.push(routes.DASHBOARD_ROUTE);
      })
      .catch(err => console.log(err));
  }

  handleUpdate(profile) {
    this.props.profileUpdate(profile);
    this.setState({ editing: false });
  }

  render() {
    const { profile, profileCreate } = this.props;

    let JSXEditing = null;
    let JSXDisplay = null;
    let JSXProfile = null;

    if (profile) {
      JSXEditing =
        <div>
          <ProfileForm profile={profile} onComplete={this.handleUpdate} />
          <button onClick={() => this.setState({editing: false})}>cancel</button>
        </div>;

      JSXDisplay =
        <div>
          <h2>Profile Info:</h2>
          <p>{profile.name}</p>
          <p>{profile.phoneNumber}</p>
          <p>{profile.meetupMemberId}</p>
          <button onClick={() => this.setState({ editing: true })}>Edit Info</button>
        </div>;

      JSXProfile =
        <div>
          <h2>{profile.name}</h2>
          { this.state.editing ? JSXEditing : JSXDisplay }
        </div>;
    }

    return (
      <div>
        <h2>Profile</h2>
        { profile ? JSXProfile : <ProfileForm onComplete={this.handleCreate} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.clientProfile,
});

const mapDispatchToProps = dispatch => ({
  profileCreate: profile => dispatch(clientProfile.createAction(profile)),
  profileUpdate: profile => dispatch(clientProfile.updateAction(profile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
