import React from 'react';

class PhotoForm extends React.Component{
  constructor(props){
    super(props);

    this.emptyState = {
      preview : undefined,

      photo: '',
      photoDirty: false,
      photoError: 'Photo is required.',

      description: '',
      descriptionDirty: false,
      descriptionError: 'Photo is required.',
    };

    this.state = this.emptyState;
    //-------------------------------------------------------------
    // BINDING HANDLER
    //-------------------------------------------------------------

    let memberFunctions = Object.getOwnPropertyNames(PhotoForm.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  //-------------------------------------------------------------
  // MEMBER FUNCTIONS
  //-------------------------------------------------------------

  handleValidate({type, value, files}){
    let validImageTypes = ['image/png', 'image/jpg', 'image/jpg'];
    
    switch(type){
      case 'file':
        if(files.length !== 1)
          return 'You must only upload one, and only one, photo';

        let imageType = files[0].type;

        if(!validImageTypes.includes(imageType))
          return 'The photo must be a jpeg, png or jpg';
        
        return null;
      case 'text':
        if(value.length < 5)
          return 'You must have at least 5 characters';
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
        descriptionError: this.handleValidate(event.target),
        descriptionDirty: true,
      });
    }
  }

  handleSumbit(event){
    event.preventDefault();
    // david - TODO if there is an error dont call onComplete
    this.props.OnComplete(this.state);
    this.setState(this.emptyState);
  }

  //-------------------------------------------------------------
  // LIFE CYCLE HOOKS
  //-------------------------------------------------------------

  render(){
    return(
      <form
        onSubmit={this.handleSubmit}
        className='photo-forum'>
        <img style={{width: '200px'}} src={this.state.preview} />

        <p> {this.state.photoError}</p>
        <label>Photo </label>

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

        <button type='submit'> Upload Photo </button>
      </form>
    );
  }
}

export default PhotoForm;

const fileToDataURL = (file) => {
  return new Promise((resolve, reject) => {
    if(!file)
      return reject(new Error('file required'));
  
    let reader = new FileReader();

    reader.addEventListener('load', () => resolve(reader.result));
    reader.addEventListener('error', reject);

    return reader.readAsDataURL(file);
  }



  );
};