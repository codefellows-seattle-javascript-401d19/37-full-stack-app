import React from 'react';
import { connect } from "react-redux";

import PhotoForm from "../photo-form";
import * as clientPhotos from '../../action/client-photo';

class Dashboard extends React.Component {
  render(){
    return (
      <div className='dashboard'>
        <h1> Its a me Dashboard </h1>
        <PhotoForm onComplete={this.props.createPhoto} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createPhoto: photo => dispatch(clientPhotos.createActionRequest(photo)),
});

export default connect(null, mapDispatchToProps)(Dashboard);