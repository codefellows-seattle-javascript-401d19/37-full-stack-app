import React from 'react';

const emptyState = {
  preview: undefined,
  wavename: '',
  wave: '',
  transform: '',
};

class WavForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.wave ? this.props.wave : emptyState;
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateFile = this.validateFile.bind(this);
  }

  validateFile({type, value, files}){
    let validFileExtensions = ['audio/wav'];
    let fileType;
    switch(type){
      case 'file':
        fileType = files[0].type;
        if(files.length > 1){
          return 'You may only upload one file at a time';
        }
        if(!validFileExtensions.includes(fileType)){
          return 'File must be a wav format';
        }
        return null;
      case 'text':
        if(value.length < 5){
          return 'Wav file name must be at least 5 characters';
        }
        return null;
      default:
        return null;
    }
  }

  onChange(event){
    let {type, value, files} = event.target;
    if(type === 'file'){
      let error = this.validateFile(event.target);
      if(!error){
        fileToDataURL(files[0])
          .then(preview => this.setState({preview}));
      }
      this.setState({wave: files[0]});
    }else if(type === 'text'){
      this.setState({wavename: value});
    }else {
      this.setState({transform: value});
    }
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(emptyState);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.wave){
      this.setState(nextProps.wave);
    }
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>File Name</label>
        <input
          type = 'text'
          name = 'wavename'
          placeholder = 'wav file name'
          value = {this.state.wavename}
          onChange = {this.onChange}
        />
        <label>Wav File</label>
        <input
          type = 'file'
          name = 'wave'
          onChange = {this.onChange}
        />
        <label>Transform Options</label>
        <select name='transform' onChange={this.onChange}>
          <option value=''>Select Transform</option>
          <option value='bitcrusher'>Bitcrush</option>
          <option value='delay'>Delay</option>
          <option value='noise'>Add Noise</option>
          <option value='reverse'>Reverse</option>
          <option value='downpitcher'>Down Pitch</option>
        </select>
        <button type='submit'>Upload</button>
      </form>
    );
  }
}

export default WavForm;

const fileToDataURL = (file) => {
  return new Promise((resolve, reject) => {
    if(!file){
      return reject(new Error('No file selected'));
    }

    let reader = new FileReader();
    reader.addEventListener('load', () => resolve(reader.result));
    reader.addEventListener('error', reject);
    return reader.readAsDataURL(file);
  });
};
