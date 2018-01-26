import React from 'react';
import {connect} from 'react-redux';
import * as profileActions from '../../actions/profile';
import * as authActions from '../../actions/auth';
import ProfileForm from '../profile-form';

let defaultState = {
  editing: false,
};

class Profile extends React.Component{
  constructor(props){
    super(props);
    this.state = defaultState;
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleUpdate(profile){
    this.props.updateProfile(profile);
    this.setState(defaultState);
  }

  handleCreate(profile){
    this.props.createProfile(profile)
      .then(() => {
        this.props.history.push('/dashboard');
      })
      .catch(error => console.log(error));
  }

  render(){
    let {
      profile,
      createProfile,
      updateProfile,
    } = this.props;

    // these three need to be declared outside of the if block since they're referenced outside of the if block
    let displayedProfileJSX = null;
    let nonEditingJSX = null;
    let editingJSX = null;

    if(profile){
      nonEditingJSX =
      <div>
        <span>Bio: {profile.bio}</span>
        <button onClick={() => this.setState({editing: true})}> Edit Bio </button>
      </div>;

      editingJSX =
      <div>
        <ProfileForm profile={profile} onComplete={this.handleUpdate} />
        <button onClick={() => {this.setState({editing: false});}}> Cancel </button>
      </div>;

      displayedProfileJSX =
        <div>
          <h3>Username: {profile.username}</h3>
          {this.state.editing ? editingJSX : nonEditingJSX}
        </div>;
    }

    return (
      <div>
        <h2>Your Profile</h2>
        { profile ? displayedProfileJSX : <ProfileForm onComplete={this.handleCreate}/>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile : state.profile,
});

const mapDispatchToProps = (dispatch) => ({
  createProfile : (profile) => dispatch(profileActions.createAction(profile)),
  updateProfile : (profile) => dispatch(profileActions.updateAction(profile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
