import React from 'react';
import {connect} from 'react-redux';
import ProfileForm from '../profile-form';

import * as clientProfileActions from '../../action/client';
import * as routes from '../../routes';

class Profile extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      editing: false,
    };

    let memberFunctions = Object.getOwnPropertyNames(Profile.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleCreate(profile){
    this.props.profileCreate(profile)
      .then(() => {
        this.props.history.push(routes.DASHBOARD_ROUTE);
      });
  }

  handleUpdate(profile){
    this.props.profileUpdate(profile);
    this.setState({editing : false});
  }

  render(){
    let {
      profile,
      profileCreate,
      profileUpdate,
    } = this.props;

    let editingJSX = null;
    let displayJSX = null;
    let profileJSX = null;

    if(profile){
      editingJSX =
        <div>
          <ProfileForm profile={profile} handleComplete={this.handleUpdate} />
          <button onClick={() => this.setState({editing : false})} > cancel </button>
        </div>;

      displayJSX =
        <div>
          <p>{profile.bio}</p>
          <button onClick={() => this.setState({editing : true})} > Edit Bio </button>
        </div>;

      displayJSX =
        <div>
          <h2>{profile.username}</h2>
          <h3>{profile.email}</h3>
          {this.state.editing ? editingJSX : displayJSX}
        </div>;
    }

    return (
      <div>
        <h1> Profile </h1>
        {profile ? profileJSX : <ProfileForm handleComplete ={this.handleCreate} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile : state.clientProfile,
});

const mapDispatchToProps = (dispatch) => ({
  profileCreate : (profile) => dispatch(clientProfileActions.createAction(profile)),
  profileUpdate : (profile) => dispatch(clientProfileActions.updateAction(profile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
