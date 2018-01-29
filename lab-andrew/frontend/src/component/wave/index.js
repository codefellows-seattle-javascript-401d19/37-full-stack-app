import React from 'react';
import {connect} from 'react-redux';

import * as clientWaves from '../../action/client-waves';

class Wave extends React.Component {
  render(){
    let scrambledAudio = this.props.wave ? (
      <React.Fragment>
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
    ) : <p>Click on upload to load a wave file and get started!</p>;
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