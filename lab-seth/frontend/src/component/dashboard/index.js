import React from 'react';
import {connect} from 'react-redux'

import PhotoForm from '../photo-form'
import * as clientPhotos from '../../action/client-photo'

class Dashboard extends React.Component{
  render(){
    return(
      <div className='dashboard'>
        <h1> This is Your Dashboard </h1>
        <PhotoForm onComplete={this.props.createPhoto} />
      </div>
    );
  }
}

const mapDispathToProps = (dispatch) => ({
  createPhoto: (photo) => dispatch(clientPhotos.createAction(photo))
})

export default Dashboard;