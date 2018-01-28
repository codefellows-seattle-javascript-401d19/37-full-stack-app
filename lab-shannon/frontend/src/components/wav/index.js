import React from 'react';
import {connect} from 'react-redux';
import WavForm from '../wav-form';
import Navbar from '../navbar';
import * as waveActions from '../../actions/wavFile';

class Wav extends React.Component{
  render(){
    return(
      <div>
        <header>
          <Navbar />
        </header>
        <p>Select a wav file to upload</p>
        <WavForm onComplete={this.props.createWave}/>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  wavFile : state.wavFile,
});

let mapDispatchToProps = (dispatch) => ({
  createWave : (wave) => dispatch(waveActions.setActionRequest(wave)),
  updateWave : (wave) => dispatch(waveActions.updateActionRequest(wave)),
  destroyWave: () => dispatch(waveActions.destroyActionRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wav);
