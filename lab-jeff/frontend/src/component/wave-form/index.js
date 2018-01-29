import React from 'react';
import { connect } from 'react-redux';
import * as waveActions from '../../action/wave';

class WaveForm extends React.Component {
  constructor(props) {
    super(props);

    this.emptyState = {
      wave: '',
      waveDirty: false,
      waveError: 'Wave is required.',

      wavename: '',
      transform: '',
    };

    this.state = this.emptyState;

    let memberFunctions = Object.getOwnPropertyNames(WaveForm.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleValidate({ type, value, files }) {
    let validAudioTypes = ['audio/x-wav', 'audio/wav'];
    let audioType;
    switch (type) {
      case 'file':
        if (files.length !== 1) return 'You must only select one file';

        audioType = files[0].type;

        if (!validAudioTypes.includes(audioType)) return 'The file must be a wav';

        return null;
      default:
        return null;
    }
  }
  handleChange(event) {
    let { type, value, files, name } = event.target;

    if (type === 'file') {
      let error = this.handleValidate(event.target);

      this.setState({
        wave: files[0],
        waveError: error,
        waveDirty: true,
      });
    } else {
      this.setState({ [name]: value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.createWave(this.state);
    this.setState(this.emptyState);
    this.handleResetFileInput();
  }
  handleResetFileInput() {
    let randomString = Math.random().toString(36);

    this.setState({
      theInputKey: randomString,
    });
  }
  render() {
    let { wave } = this.props;
    let JSXWave = null;
    if (wave) {
      JSXWave = (
        <div>
          <p>
            <a href={wave.url}>link to wave file</a>
            <audio controls src={wave.url} type="audio/wav" />
          </p>
        </div>
      );
    }
    return (
      <section>
        <form onSubmit={this.handleSubmit} className="wave-form">
          <p>{this.state.waveError}</p>
          <label>Wave</label>

          <input key={this.state.theInputKey || ''} type="file" name="wave" onChange={this.handleChange} />

          <label>Wave Name</label>

          <input type="text" name="wavename" value={this.state.wavename} onChange={this.handleChange} />
          <select type="text" name="transform" value={this.state.transform} onChange={this.handleChange}>
            <option value="delay">Delay (echo)</option>
            <option value="bitcrusher" selected>
							Bitcrusher (robotic)
            </option>
            <option value="reverse">reverse</option>
            <option value="noise">Noise</option>
            <option value="downpitcher">Downpitcher (slowdown)</option>
          </select>

          <button type="submit"> upload wave </button>
        </form>
        {JSXWave}
      </section>
    );
  }
}
const mapStateToProps = state => ({
  wave: state.wave,
});
const mapDispatchToProps = dispatch => ({
  createWave: wave => dispatch(waveActions.createActionRequest(wave)),
});
export default connect(mapStateToProps, mapDispatchToProps)(WaveForm);
