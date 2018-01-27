import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as profileActions from '../../actions/profile';
import * as authActions from '../../actions/auth';
import * as waveActions from '../../actions/wavFile';
import ProfileForm from '../profile-form';
import WavForm from '../wav-form';

let defaultState = {
  bioEditing: false,
  waveEditing: false,
};

class Profile extends React.Component{
  constructor(props){
    super(props);
    this.state = defaultState;
    this.handleProfileUpdate = this.handleProfileUpdate.bind(this);
    this.handleProfileCreate = this.handleProfileCreate.bind(this);
    this.handleWaveUpdate = this.handleWaveUpdate.bind(this);
  }

  handleProfileUpdate(profile){
    this.props.updateProfile(profile);
    this.setState(defaultState);
  }

  handleProfileCreate(profile){
    this.props.createProfile(profile)
      .then(() => {
        this.props.history.push('/dashboard');
      })
      .catch(error => console.log(error));
  }

  handleWaveUpdate(wave){
    this.props.updateActionRequest(wave);
    this.setState(defaultState);
  }

  render(){
    let {
      wavFile,
      profile,
      createProfile,
      updateProfile,
      updateWave,
      destroyWave,
    } = this.props;

    // these three need to be declared outside of the if block since they're referenced outside of the if block
    let displayedProfileJSX = null;
    let nonEditingJSX = null;
    let editingJSX = null;

    if(profile){
      nonEditingJSX =
      <div>
        <span>Bio: {profile.bio}</span>
        <button onClick={() => this.setState({bioEditing: true})}> Edit Bio </button>
      </div>;

      editingJSX =
      <div>
        <ProfileForm profile={profile} onComplete={this.handleProfileUpdate} />
        <button onClick={() => {this.setState({bioEditing: false});}}> Cancel </button>
      </div>;

      displayedProfileJSX =
        <div>
          <h3>Username: {profile.username}</h3>
          {this.state.bioEditing ? editingJSX : nonEditingJSX}
        </div>;
    }

    let  displayedWavJSX =
        <div>
          <span>Wav Files: </span>
          <span>{wavFile ? wavFile.url : `You don't have any wav files`}</span>
          {wavFile ? (this.state.waveEditing ? editingWavJSX : nonEditingWavJSX) : <button><Link to='/upload'>Upload a Wav File</Link></button>}
        </div>;

    let  nonEditingWavJSX =
        <div>
          <button onClick={() => {this.setState({waveEditing: true});}}>Edit Wav File</button>
        </div>;

    let editingWavJSX =
      <div>
        <WavForm wavFile={wavFile} onComplete={this.handleWaveUpdate} updateWave={this.props.updateWave} destroyWave={this.props.destroyWave}/>
        <button onClick={() => {this.setState({waveEditing: false});}}> Cancel </button>
      </div>;

    return (
      <div>
        <h2>Your Profile</h2>
        { profile ? displayedProfileJSX : <ProfileForm onComplete={this.handleProfileCreate}/>}
        { displayedWavJSX }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ //these names on the state come from what names you use in the reducer (i.e. imported wave reducer as wavFile, so that's the property on state)
  profile : state.profile,
  wavFile: state.wavFile,
});

const mapDispatchToProps = (dispatch) => ({
  createProfile : (profile) => dispatch(profileActions.createAction(profile)),
  updateProfile : (profile) => dispatch(profileActions.updateAction(profile)),
  updateWave : (wave) => dispatch(waveActions.updateActionRequest(wave)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
