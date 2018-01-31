import React from 'react';
import * as authActions from '../../action/auth';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class Header extends React.Component {
  render() {
    let JSXNotLoggedIn =
      <ul>
        <li> <Link to='/'> Home </Link> </li>
        <li> <Link to='/login'> Login </Link> </li>
        <li> <Link to='/signup'> Signup </Link> </li>
      </ul>;

    let JSXLoggedIn =
      <React.Fragment>
        <ul>
          <li> <Link to='/dashboard'> dashboard </Link> </li>
          <li> <Link to='/upload'> upload </Link> </li>
          <li> <Link to='/favorites'> favorites </Link> </li>
        </ul>
        <button onClick={this.props.doLogout}> logout </button>
      </React.Fragment>;
    return (
      <header className='header'>
        <h1> scrambleVox </h1>
        <nav>
          {this.props.loggedIn ? JSXLoggedIn : JSXNotLoggedIn}
        </nav>
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