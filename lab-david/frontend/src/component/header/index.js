import React from 'react';
import * as authActions from '../../action/auth';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Header extends React.Component{
  render(){
    let JSXNotLoggedIn = 
      <ul>
        <li> <Link to='/'>Home</Link> </li>
        <li> <Link to='/login'> Login </Link></li>
        <li> <Link to='/signup'> Signup </Link></li>
      </ul>;
    let JSXLoggedIn = 
    <ul>
      <li> <Link to='/dashboard'>Home</Link></li>
      <li> <Link to='/upload'>Upload</Link></li>
      <li> <Link to='/profile'>Profile </Link></li>
    </ul>;

    return(
      <header className='header'>
        <h1>Lindahlgram</h1>
        <nav>
          { this.props.loggedIn ? JSXLoggedIn : JSXNotLoggedIn }
        </nav>
        { 
          this.props.loggedIn ? 
            <button onClick={this.props.doLogout}> Logout </button> : undefined
        }
      </header>
    );
  }

}

const mapStateToProps = (state) => ({
  loggedIn : !!state.token, // david - getting the truthy value of token
});

const mapDispatchToProps = (dispatch) => ({
  doLogout : () => dispatch(authActions.logoutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);