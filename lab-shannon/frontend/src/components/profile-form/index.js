import React from 'react';
import * as profileActions from '../../actions/profile';

let emptyState = {
  bio: '',
};

class ProfileForm extends React.Component{
  constructor(props){
    super(props);
    this.state = emptyState;
  }
  render(){
    return (
      <div>
        <h4>Testing out the profile form</h4>
      </div>
    );
  }
}

export default ProfileForm;
