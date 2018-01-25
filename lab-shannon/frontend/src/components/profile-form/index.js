import React from 'react';
import * as profileActions from '../../actions/profile';

let emptyState = {
  bio: '',
};

class ProfileForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.profile ? this.props.profile : emptyState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    let {name, value} = event.target;
    this.setState({[name] : value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(emptyState);
  }

  compontentWillReceiveProps(nextProps){
    if(nextProps.profile){
      this.setState(nextProps.profile);
    }
  }

  render(){
    return (
      <div>
        <h4>Testing out the profile form</h4>
        <form onSubmit={this.handleSubmit}>
          <textArea
            name = 'bio'
            value = {this.state.bio}
            onChange={this.handleChange}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default ProfileForm;
