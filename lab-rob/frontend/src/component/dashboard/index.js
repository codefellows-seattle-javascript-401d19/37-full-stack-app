import React from 'react';
import {connect} from 'react-redux';

import PhotoForm from '../photo-form';
import PhotoList from '../photo-list';
import {createPhotoActionRequest} from '../../action/photos';


class Dashboard extends React.Component {
  render() {
    let myPhotos = [];

    if(this.props.profile) {
      myPhotos = this.props.photos
        .filter(photo => photo.owner === this.props.profile.owner);
    }

    return (
      <div className='dashboard'>
        <h2>Sluggram Dashboard</h2>
        <PhotoForm onComplete={this.props.createPhoto} />
        <PhotoList photos={myPhotos} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  photos: state.photos,
});

const mapDispatchToProps = dispatch => ({
  createPhoto: (photo) => dispatch(createPhotoActionRequest(photo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);