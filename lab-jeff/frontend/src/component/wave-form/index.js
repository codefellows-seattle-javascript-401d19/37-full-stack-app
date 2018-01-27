import React from 'react';

class WaveForm extends React.Component {
  constructor(props) {
    super(props);

    this.emptyState = {
      wave: '',
      waveDirty: false,
      waveError: 'Wave is required.',

      wavename: '',
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
    let validAudioTypes = ['audio/x-wav'];
    let audioType;
    switch (type) {
      case 'file':
        if (files.length !== 1) return 'You must only select one file';

        audioType = files[0].type;

        if (!validAudioTypes.includes(audioType)) return 'The image must be a png or a jpg';

        return null;
      default:
        return null;
    }
  }
  handleChange(event) {
    let { type, value, files } = event.target;

    if (type === 'file') {
      let error = this.handleValidate(event.target);

      this.setState({
        wave: files[0],
        waveError: error,
        waveDirty: true,
      });
    } else {
      this.setState({
        wavename: value,
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    //TODO: if there is an error don't call oncomplete
    this.props.onComplete(this.state);
    this.setState(this.emptyState);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="wave-form">
        <p>{this.state.photoError}</p>
        <label>Wave</label>

        <input type="file" name="wave" onChange={this.handleChange} />

        <label>Wave Name</label>

        <input type="text" name="wavename" value={this.state.wavename} onChange={this.handleChange} />

        <button type="submit"> upload wave </button>
      </form>
    );
  }
}

export default WaveForm;
