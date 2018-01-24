import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import * as routes from '../../routes';

class AuthRedirect extends React.Component {
  render() {
    let {location, history, token} = this.props;
    let {pathname} = location;
    let destinationRoute = null;

    if (pathname === routes.LOGIN_ROUTE || pathname === routes.SIGNUP_ROUTE || pathname === routes.ROOT_ROUTE) {
      if (token) {
        destinationRoute = routes.DASHBOARD_ROUTE;
      }
    }
    else {
      if (!token)
        destinationRoute = routes.ROOT_ROUTE;
    }
    return (
      <div className='auth-redirect'>
        {destinationRoute ? <Redirect to={destinationRoute}/> : undefined}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: state.token,
});

export default connect(mapStateToProps)(AuthRedirect);