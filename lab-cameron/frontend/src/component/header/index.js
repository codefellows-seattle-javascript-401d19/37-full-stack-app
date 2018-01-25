import React, { Component } from 'react';
import * as authActions from '../../action/auth';
import * as util from '../../lib/util';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    const JSXNotLoggedIn =
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/signup'>Signup</Link></li>
      </ul>;

    const JSXLoggedIn =
      <ul>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
      </ul>;

    return (
      <header className='header'>
        <h1>Trendly</h1>
        <nav>
          {this.props.loggedIn ? JSXLoggedIn : JSXNotLoggedIn}
        </nav>
        {this.props.loggedIn ?
          <button onClick={this.props.doLogout}>logout</button> :
          undefined
        }
      </header>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: !!state.token,
});

const mapDispatchToProps = dispatch => ({
  doLogout: () => dispatch(authActions.logoutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
