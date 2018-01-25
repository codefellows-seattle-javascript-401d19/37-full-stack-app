import React from 'react';
import {connect} from 'react-redux';
// import {BrowserRouter, Route} from 'react-router-dom';

import * as clientFavorites from '../../action/client-favorites';


class Dashboard extends React.Component {
  componentWillMount(){
    if (this.props.loggedIn) {
      this.props.fetchClientFavorites();
      // .catch(console.error);
    }
  }

  render() {
    return (
      <div className='dashboard'>
        <h1> scrambleVox </h1>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  loggedIn: !!state.token,
});

const mapDispatchToProps = (dispatch) => ({
  fetchClientFavorites: () => dispatch(clientFavorites.fetchAction()),
});


// export default Dashboard;
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);