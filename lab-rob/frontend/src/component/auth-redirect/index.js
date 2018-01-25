import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class AuthRedirect extends React.Component {
  render() {
    let {location, history, token} = this.props;
    let {pathname} = location;
    let destinationRoute = null;

    if(['/login', '/signup', '/'].includes(pathname)) {
      if(token) // If already logged in, go to dashboard
        destinationRoute = '/dashboard';
    } else {
      if(!token)
        destinationRoute = '/';
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