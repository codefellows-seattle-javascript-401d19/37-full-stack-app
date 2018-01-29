import React from 'react';
import {connect} from 'react-redux';

import * as clientWaves from '../../action/client-waves';

class Wave extends React.Component {
  render(){
    let scrambledAudio = this.props.wave ? (
      <React.Fragment>
        <h3>Here is your transformed wave file:</h3>
        <h2>{this.props.wave.wavename}</h2>
        <audio
          controls
          src={this.props.wave.url}
          type='audio/wav'>
        </audio> 
        <button
          onClick={this.props.waveDelete}>
          Delete
        </button>
      </React.Fragment>
    ) : <h3>Click on upload to load a wave file and get started!</h3>;
    return (
      <React.Fragment>
        {scrambledAudio}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  wave: state.clientWaves,
});

const mapDispatchToProps = (dispatch) => ({
  waveDelete: () => dispatch(clientWaves.removeActionRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wave);