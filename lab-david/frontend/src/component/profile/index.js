import React from 'react';
import {connect} from 'react-redux';
import ProfileForm from '../profile-form';

import * as clientProfileActions from '../..action/client-profile';
import * as routes from '../../routes';

class Profile extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      editing : false,
    }
  }
  //-------------------------------------------------------------
  // BINDING FUNCTIONS
  //-------------------------------------------------------------
  let memberFunctions = Object.getOwnPropertyNames(Profile.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  //-------------------------------------------------------------
  // MEMBER FUNCTIONS
  //-------------------------------------------------------------
  handleCreate(profile){
    this.props.profileCreate(profile)
      .then(() => {
        this.props.history.push(routes.DASHBOARD_ROUTE); // david - as soon as profile is created go back to dashboard
      })
  }

  handleUpdate(profile){
    this.props.profileUpdate(profile);
    this.setState({editing : false })
  }


  //-------------------------------------------------------------
  // LIFE CYCLE HOOKS
  //-------------------------------------------------------------
  render(){
    let {
      profile,
      profileCreate,
      profileUpdate
    } = this.props;

    let JSXEditing = null;
    let JSXDisplay = null;
    let JSXProfile = null; // david - final render variable

    // david - below line necessary b/c we have one form doing create and update
    if(profile){
      JSXEditing = 
      <div>
        <ProfileForm profile={profile} onComplete={this.handleUpdate} />
        <button onClick={() => this.setState({ editing : false })}> Cancel 
        </button>
      </div>
      
      JSXDisplay = 
      <div>
        <p>{profile.bio}</p> // david - TODO Fix profile bio
        <button onClick={() => this.setState({ editing : true })}> Edit Bio 
        </button>
      </div>

      JSXProfile = 
      <div>
        <h2>{profile.username}</h2>
        <h3>{profile.email}</h3>
        {this.state.editing ? JSXEditing : JSXDisplay}  
      </div>
    
    }

  return(
    <div>
      <h1>Profile</h1>
      {profile ? JSXProfile : <ProfileForm onComplete={this.handleUpdate} /> }
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