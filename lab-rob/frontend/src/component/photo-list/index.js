import React from 'react';

class PhotoList extends React.Component {
  render() {
    let photoList = (
      <ul>
        {this.props.photos.map(photo => {
          return (
            <li key={photo._id}>
              <img src={photo.url} alt={photo.description} style={{width: '300px'}}/>
              <p>{photo.description}</p>
            </li>
          );
        })}
      </ul>
    );
    
    return this.props.photos.length ? photoList: null;
  }
}

export default PhotoList;
