import React from 'react';
import {connect} from 'react-redux';

import Wave from '../wave';
import * as clientWaves from '../../action/client-waves';
import * as clientFavorites from '../../action/client-favorites';


class Dashboard extends React.Component {
  componentWillMount(){
    if (this.props.loggedIn) {
      this.props.fetchClientFavorites();
      this.props.fetchClientWaves();
    }
  }

  render() {
    return (
      <div className='dashboard'>
        <h1> Welcome! </h1>
        <Wave/>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  loggedIn: !!state.token,
});

const mapDispatchToProps = (dispatch) => ({
  fetchClientFavorites: () => dispatch(clientFavorites.fetchAction()),
  fetchClientWaves: () => dispatch(clientWaves.fetchActionRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);