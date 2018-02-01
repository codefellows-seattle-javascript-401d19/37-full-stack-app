import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {logoutAction} from '../../action/auth';

class Header extends React.Component {
  render() {
    let JSXLoggedOut = (
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/signup'>Signup</Link></li>
      </ul>  
    );

    let JSXLoggedIn = (
      <Fragment>
        <ul>
          <li><Link to='/dashboard'>Dashboard</Link></li>
          <li><Link to='/profile'>Profile</Link></li>
        </ul>
        <button onClick={this.props.handleLogout}>Logout</button>
      </Fragment>
      
    );

    return (
      <header className='header'>
        <h1>Sluggram</h1>
        <nav>
          {this.props.loggedIn ? JSXLoggedIn : JSXLoggedOut}
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: !!state.token,
});

const mapDispatchToProps = dispatch => ({
  handleLogout: () => dispatch(logoutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);