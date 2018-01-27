import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as authActions from '../../actions/auth';
import './navbar.scss';

class Navbar extends React.Component{
  render(){
    let loggedInJSX =
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/dashboard'>Profile</Link></li>
      <li><Link to='/upload'>Upload A Wav File</Link></li>
    </ul>;

    let notLoggedInJSX =
      <ul>
        <li><Link to='/signup'>Sign Up</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/'>Home</Link></li>
      </ul>;

    return (
      <div>
        {this.props.loggedIn ? loggedInJSX : notLoggedInJSX}
        <button onClick={this.props.doLogout}> Logout </button>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  loggedIn : !!state.token,
});

let mapDispatchToProps = (dispatch) => ({
  doLogout : () => dispatch(authActions.logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
