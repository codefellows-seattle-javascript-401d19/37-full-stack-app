import React from 'react'

class ProfileForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      bio : '',
    }
    
    let memberFunctions = Object.getOwnPropertyNames(ProfileForm.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
    
  }

  handleChange(event){
    let {value} = event.target
    this.setState({
      bio: value,
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.onComplete(this.state)
    this.setState({
      bio : '',
    })
  }

  componentWillReceiveProps(props){
    if(props.profile)
      this.setState(props.profile)
  }

  render(){

    return(
      <form 
        className='profile-form'
        onSubmit={this.handleSubmit}
      >
      
        <textarea name='bio' 
          placeholder='Bio'
          value={this.state.bio} 
          onChange={this.handleChange}
        />
        <button type='submit'>{this.props.profile ? 'update': 'create'}</button>
      </form>
    )
  }

}

export default ProfileForm