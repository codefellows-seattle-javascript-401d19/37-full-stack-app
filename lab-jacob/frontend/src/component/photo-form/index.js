import React from 'react'

class PhotoForm extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      preview: undefined,
      photo: '',
      photoDirty: false,
      photoError: 'Photo is required',
      description: '',
      descriptionDirty: false,
      descriptionError: 'Photo Required',
    }

    this.handleValidate = this.handleValidate.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleValidate({type, value, files}){
    let validImageTypes = ['image/png', 'image/jpeg', 'image/jpg']

    switch(type){
    case 'file':{
      if(files.length !== 1)
        return 'You must only select one file'

      let imageType = files[0].type

      if(!validImageTypes.includes(imageType))
        return 'The image must be a png or a jpg'

      return null
    }
    case 'text':
      if (value.length < 10)
        return 'You must have at least 10 characters'
      return null

    default: 
      return null
    }
  }

  handleChange(event){
    let {type, value, files} = event.target

    if(type === 'file'){
      fileToDataURL(files[0])
        .then(preview => this.setState({preview}))
    }else{
      this.setState({
        description: value,
        descriptionError: this.handleValidate(event.target),
        descriptionDirty: true,
      })
    }
  }
  handleSubmit(event){
    event.preventDefault();

    this.props.onComplete(this.state)
    this.setState({
      preview: undefined,
      photo: '',
      photoDirty: false,
      photoError: 'Photo is required',
      description: '',
      descriptionDirty: false,
      descriptionError: 'Photo Required',
    })
  }

}