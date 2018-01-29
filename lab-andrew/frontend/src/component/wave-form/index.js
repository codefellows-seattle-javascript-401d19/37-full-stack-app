import React from 'react';
import * as clientWaves from '../../action/client-waves';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as routes from '../../routes';

const emptyState = {
  preview: undefined,

  wave: '',
  waveDirty: false,
  waveError: 'Wave is required.',

  wavename: '',
  wavenameDirty: false,
  wavenameError: 'Wavename is required.',

  transform: 'bitcrusher',
};

class WaveForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = emptyState;
    this.state.redirect = false;
    
    let memberFunctions = Object.getOwnPropertyNames(WaveForm.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
    
  }
 
  handleValidate({type, value, files}) {
    let validAudioType = ['audio/wav'];

    switch (type) {
      case 'file': {
        if (files.length !== 1)
          return 'You must only select one file';

        let audioType = files[0].type;
        if (!validAudioType.includes(audioType))
          return 'The audio must be a wav';

        return null;
      }
      case 'text': {
        if (value.length < 4)
          return 'Wave name must have at least 4 characters';
        return null;
      }
      default:
        return null;
    }
  }

  handleChange(event) {
    let {type, value, files} = event.target;
    if (type === 'file') {
      let error = this.handleValidate(event.target);
      if (!error) {
        fileToDataURL(files[0])
          .then(preview => this.setState({preview}));
      }
      this.setState({
        wave: files[0],
        waveError: error,
        waveDirty: true,
      });
    } else if (type === 'text') {
      this.setState({
        wavename: value,
        wavenameError: this.handleValidate(event.target),
        wavenameDirty: true,
      });
    } else {
      this.setState({
        transform: value,
      });
    }
  }

  handleSubmit(event) {
    const {waveError, wavenameError} = this.state;
    event.preventDefault();
    if (!waveError && !wavenameError) {
      this.props.waveCreate(this.state);
      this.setState(emptyState);
      this.setState({redirect: true});
    } else {
      this.setState({
        waveDirty: true,
        wavenameDirty: true,
      });
    }
  }


  render() {
    const {redirect} = this.state;
    return (
      <React.Fragment>

        <form
          onSubmit={this.handleSubmit}
          className='wave-form'>
          <audio 
            controls
            src={this.state.preview}
            type='audio/wav'>
          </audio>

          <p>{this.state.waveDirty ? this.state.waveError : null}</p>
          <label>Wave</label>

          <input
            type='file'
            name='wave'
            onChange={this.handleChange}
          />

          <p>{this.state.wavenameDirty ? this.state.wavenameError : null}</p>
          <label>Wavename</label>

          <input
            type='text'
            name='wavename'
            value={this.state.wavename}
            onChange={this.handleChange}
          />
          
          <select name="transform" onChange={this.handleChange}>
            <option value="bitcrusher">Bit-Crush</option>
            <option value="downpitcher">Down-Pitch</option>
            <option value="delay">Delay</option>
            <option value="noise">Add Noise</option>
            <option value="reverse">Reverse</option>
          </select>
          <label>Tranform option</label>

          <button type='submit'> upload wave </button>
        </form>
        {redirect && (
          <Redirect to={routes.DASHBOARD_ROUTE} />
        )
        }
      </React.Fragment>
    
    );
  }
}

const fileToDataURL = (file) => {
  return new Promise((resolve, reject) => {
    if (!file)
      return reject(new Error('file required'));

    let reader = new FileReader();

    reader.addEventListener('load', () => resolve(reader.result));
    reader.addEventListener('error', reject);

    return reader.readAsDataURL(file);
  });
};


const mapDispatchToProps = dispatch => ({
  waveCreate: (wave) => dispatch(clientWaves.createActionRequest(wave)),
});

export default connect(null, mapDispatchToProps)(WaveForm);