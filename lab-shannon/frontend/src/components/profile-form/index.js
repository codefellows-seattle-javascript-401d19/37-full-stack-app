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

  componentWillReceiveProps(nextProps){
    if(nextProps.profile){
      this.setState(nextProps.profile);
    }
  }

  render(){
    let buttonText = this.props.profile ? 'Update' : 'Create';
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea
            name = 'bio'
            value = {this.state.bio}
            onChange={this.handleChange}
          />
          <button type='submit'> {buttonText} </button>
        </form>
      </div>
    );
  }
}

export default ProfileForm;
