import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as authActions from '../../actions/auth';

class Navbar extends React.Component{
  render(){
    let loggedInJSX =
    <div>
      <h2>You are logged in</h2>
      <Link to='/'>Home</Link>
      <Link to='/dashboard'>Dashboard</Link>
      <Link to='/upload'>Upload Wavs</Link>
    </div>;

    let notLoggedInJSX =
      <div>
        <h2>You are NOT logged in</h2>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/login'>Login</Link>
        <Link to='/'>Home</Link>
      </div>;

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
