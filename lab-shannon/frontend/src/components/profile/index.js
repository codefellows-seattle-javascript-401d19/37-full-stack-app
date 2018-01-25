import React from 'react';
import {connect} from 'react-redux';
import * as profileActions from '../../actions/profile';
import ProfileForm from '../ProfileForm';

class Profile extends React.Component{
  render(){
    return (
      <div>
        <ProfileForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile : state.profile,
});

const mapDispatchToProps = (dispatch) => ({
  createProfile : (profile) => dispatch(profileActions.createProfile(profile)),
  // updateProfile : (profile) => dispatch(profileActions.updateProfile(profile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
