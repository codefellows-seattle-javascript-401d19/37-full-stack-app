import React from 'react';

let emptyState = {
  bio : '',
};

class ProfileForm extends React.Component{
  constructor(props){
    super(props);
    this.state = props.profile ? props.profile : emptyState;

    let memberFunctions = Object.getOwnPropertyNames(ProfileForm.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }


  handleChange(event){
    let {name, value} = event.target;
    this.setState({
      [name] : value,
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.handleComplete(this.state);
    this.setState(emptyState);
  }

  componentWillReceiveProps(props){
    if(props.profile)
      this.setState(props.profile);
  }

  render() {
    return(
      <form
        onSubmit = {this.handleSubmit}
        className = "profile-form">

        <textarea
          name="bio"
          value={this.state.bio}
          onChange={this.handleChange}
        />
        <button type='submit' onClick={this.handleSubmit}> {this.props.profile ? 'update' : 'create'} </button>

      </form>
    );
  }
}

export default ProfileForm;
