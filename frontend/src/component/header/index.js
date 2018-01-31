import React from 'react';
import * as authActions from '../../action/auth';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Header extends React.Component{
  render(){
    let loggedInJSX =
      <ul>
        <li> <Link to='/dashboard'> dashboard </Link> </li>
        <li> <Link to='/upload'> upload </Link> </li>
        <li> <Link to='/profile'> profile </Link> </li>
      </ul>;

    let notLoggedInJSX =
      <ul>
        <li> <Link to='/dashboard'> dashboard </Link> </li>
      </ul>;


    return (
      <header className="header" >
        <h1> Noncents </h1>
        <nav>
          {this.props.loggedIn ? loggedInJSX : notLoggedInJSX}
        </nav>
        {this.props.loggedIn ?
          <button onClock={this.props.handleLogout}> logout </button>
          : undefined}
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn : !!state.token,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout : () => dispatch(authActions.logoutAction()),
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);
