import React, {Fragment} from 'react';

import autoBind from '../../lib/auto-bind';

let emptyState = {
  preview: null,

  photo: '',
  photoDirty: false,
  photoError: 'Photo is required.',

  description: '',
  descriptionDirty: false,
  descriptionError: 'Description is required.',
};

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = emptyState;

    autoBind(this, PhotoForm);
  }

  handleValidate({type, value, files}) {
    let validImageTypes = ['image/png', 'image/jpeg', 'image/jpg'];

    switch(type) {
      case 'file': {
        if(files.length !== 1)
          return 'Please select only one file.';

        let imageType = files[0].type;

        if(!validImageTypes.includes(imageType))
          return 'The image must be a png or a jpg!';

        return null;
      }
      case 'text':
        if(value.length < 10)
          return 'Please enter a description of at least 10 characters.';
        return null;
      default:
        return null;
    }
  }

  handleChange(event) {
    let {type, value, files} = event.target;
    let error = this.handleValidate(event.target);

    if(type === 'file') {
      if(!error) {
        fileToDataURL(files[0])
          .then(preview => this.setState({preview}));
      }

      this.setState({
        photo: files[0],
        photoError: error,
        photoDirty: true,
      });
    } else {
      this.setState({
        description: value,
        descriptionError: error,
        descriptionDirty: true,
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    
    this.props.onComplete(this.state);
    this.setState(emptyState); // TODO: May need to change this to a this prop
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className='photo-form'
      >
        <img style={{width: '200px'}} src={this.state.preview} />
        <p>{this.state.photoError}</p>
        <label>Photo</label>

        <input 
          type='file'
          name='photo'
          onChange={this.handleChange}
        />

        <p>{this.state.descriptionError}</p>
        <label>Description</label>

        <input
          type='text'
          name='description'
          value={this.state.description}
          onChange={this.handleChange}
        />

        <button type='submit'>Upload</button>
      </form>
    );
  }
}

export default PhotoForm;

const fileToDataURL = file => {
  return new Promise((resolve, reject) => {
    if(!file)
      return reject(new Error('file required'));

    let reader = new FileReader();

    reader.addEventListener('load', () => resolve(reader.result));
    reader.addEventListener('error', reject);

    return reader.readAsDataURL(file);
  });
};