import React from 'react';

class PhotoForm extends React.Component{
  constructor(props) {
    super(props);

    this.emptyState = {
      preview: undefined,

      photo: '',
      photoDirty: false,
      photoError: 'a photo is required',

      description: '',
      descriptionDirty: false,
      descriptionError: 'a photo is required',
    };

    this.state = this.emptyState;

    let memberFunctions = Object.getOwnPropertyNames(PhotoForm.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  //member functions

  handleValidate({type, value, files}){
    let validImageTypes = ['image/png', 'image/jpeg', 'image/jpg'];

    switch(type){
    case 'file':
      if(files.length !== 1)
        return 'Only 1 file is allowed';
      let imageType = files[0].type;
      if(!validImageTypes.includes(imageType))
        return 'The image must be a jpeg, jpg, or png';
      return null;
    case 'text':
      if(value.length < 10)
        return 'Name length must be at least 10 characters';
      return null;
    default:
      return null;
    }
  }

  handleChange(event){
    let {type, value, files} = event.target;

    if(type === 'file'){
      let error = this.handleValidate(event.target);
      if(!error){
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
        descriptionError : this.handleValidate(event.target),
        descriptionDirty: true,
      });
    }
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(this.emptyState);
  }

  // life cycle hooks

  render(){
    return(
      <form
        onSubmit={this.handleSubmit}
        className='photo-form'>
        <img style={{width:'200px'}} src={this.state.preview} />

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

        <button type='submit'> upload photo </button>
      </form>
    );
  }
}

export default PhotoForm;

const fileToDataURL = (file) => {
  return new Promise((resolve,reject) => {
    if(!file)
      return reject(new Error('a file is required'));

    let reader = new FileReader();

    reader.addEventListener('load',() => resolve(reader.result));
    reader.addEventListener('error',reject);

    return reader.readAsDataURL(file);
  });
};
