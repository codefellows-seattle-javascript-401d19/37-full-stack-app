import React from 'react';
import {connect} from 'react-redux';
import WavForm from '../wav-form';
import Navbar from '../navbar';
import * as wavActions from '../../actions/wavFile';

class Wav extends React.Component{
  render(){
    return(
      <div>
        <header>
          <Navbar />
        </header>
        <p>Select a wav file to upload</p>
        <WavForm onComplete={this.props.createWav} updateWav={this.props.updateWav} destroyWav={this.props.destroyWav}/>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  wave : state.wave,
});

let mapDispatchToProps = (dispatch) => ({
  createWav : (wav) => dispatch(wavActions.setActionRequest(wav)),
  updateWav : (wav) => dispatch(wavActions.updateActionRequest(wav)),
  destroyWav: () => dispatch(wavActions.destroyActionRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wav);
