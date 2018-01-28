import React from 'react';
import {connect} from 'react-redux';
// import Header from '../header';

import PhotoForm from '../photo-form';
import * as clientPhotos from '../../action/client-photos';

class Dashboard extends React.Component {
  render() {
    return (
      <div className='dashboard'>
        {/* <Header/> */}
        <h1>This is the dashboard</h1>
        <PhotoForm onComplete={this.props.createPhoto}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createPhoto: (photo) => dispatch(clientPhotos.createActionRequest(photo)),
});

export default connect(null, mapDispatchToProps)(Dashboard);
