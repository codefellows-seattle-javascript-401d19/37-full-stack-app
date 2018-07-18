import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {LOGIN_ROUTE, SIGNUP_ROUTE, ROOT_ROUTE, DASHBOARD_ROUTE} from '../../routes';

class AuthRedirect extends React.Component {
  render() {
    let {location, history, token} = this.props;
    let {pathname} = location;
    let destinationRoute = null;

    if([LOGIN_ROUTE, SIGNUP_ROUTE, ROOT_ROUTE].includes(pathname)) {
      if(token) // If already logged in, go to dashboard
        destinationRoute = DASHBOARD_ROUTE;
    } else {
      if(!token)
        destinationRoute = ROOT_ROUTE;
    }

    return (
      <div className='auth-redirect'>
        {destinationRoute ? <Redirect to={destinationRoute} /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({token: state.token});

export default connect(mapStateToProps)(AuthRedirect);