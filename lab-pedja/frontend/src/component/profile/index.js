import React from "react";
import { connect } from "react-redux";
import ProfileForm from "../profile-form";

import * as routes from '../../routes';
import * as clientProfile from '../../action/client-profile';

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editing: false,
    }

    this.handleCreate = this.handleCreate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleCreate(profile){
    this.props.profileCreate(profile)
      .then(() => {
        this.props.history.push(routes.DASHBOARD_ROUTE);
      });
  }
  
  handleUpdate(profile){
    this.props.profileUpdate(profile);
    this.setState({ editing : false });
  }

  render(){
    let {
      profile,
      profileCreate,
      profileUpdate,
    } = this.props;

    let JSXEditing = null;
    let JSXDisplay = null;
    let JSXProfile = null;

    if(profile){
      JSXEditing = 
        <div>
          <ProfileForm profile={profile} onComplete={this.handleUpdate} />
          <button onClick={() => this.setState({editing:false})}> cancel </button>
        </div>;

      JSXDisplay = 
        <div>
          <p>{profile.bio}</p>
          <button onClick={() => this.setState({editing:true})}> Edit Bio </button>
        </div>;

      JSXProfile = 
        <div>
          <h2> {profile.username} </h2>
          <h3> {profile.email} </h3>
          {this.state.editing ? JSXEditing : JSXDisplay}
        </div>;
    }

    return(
      <div>
        <h2> profile </h2>
        { profile ? JSXProfile : <ProfileForm onComplete={this.handleCreate}/> }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile : state.clientProfile,
});

const mapDispatchToProps = dispatch => ({
  profileCreate: profile => dispatch(clientProfile.createAction(profile)),
  profileUpdate: profile => dispatch(clientProfile.updateAction(profile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);