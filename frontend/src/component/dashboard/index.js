import React from 'react';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
  render() {
    let { } = this.props;

    return (
      <div className='dashboard'>
        <h2>Welcome to the Dashboard! ^.^</h2>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);