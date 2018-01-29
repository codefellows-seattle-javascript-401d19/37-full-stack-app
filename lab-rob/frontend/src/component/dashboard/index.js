import React from 'react';
import {connect} from 'react-redux';

import PhotoForm from '../photo-form';
import {createPhotoActionRequest} from '../../action/photo';


class Dashboard extends React.Component {
  render() {
    return (
      <div className='dashboard'>
        <h2>Sluggram Dashboard</h2>
        <PhotoForm onComplete={this.props.createPhoto} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createPhoto: (photo) => dispatch(createPhotoActionRequest(photo)),
});

export default connect(null, mapDispatchToProps)(Dashboard);