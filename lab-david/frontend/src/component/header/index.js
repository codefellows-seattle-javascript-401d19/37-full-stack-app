import React from 'react';
import * as authActions from '../../action/auth';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {navbar} from 'bulma';
// import './header.scss';
import logo from '../../assets/lindahlgram.png';

class Header extends React.Component{
  render(){
    let JSXNotLoggedIn = 
      <ul>
        <li className="navbar-item"> <Link to='/'>Home</Link> </li>
        <li className="navbar-item"> <Link to='/login'> Login </Link></li>
        <li className="navbar-item"> <Link to='/signup'> Signup </Link></li>
      </ul>;
    let JSXLoggedIn = 
    <ul>
      <li className="navbar-item"> <Link to='/dashboard'>Home</Link></li>
      <li className="navbar-item"> <Link to='/upload'>Upload</Link></li>
      <li className="navbar-item"> <Link to='/profile'>Profile </Link></li>
    </ul>;

    return(
      <header className='header'>
        <h1>Lindahlgram</h1>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="#">
              <img src={logo} alt="lindahlgram logo" width="112" height="28"/>
            </a>

            <button className="button navbar-burger">
              <span>{ this.props.loggedIn ? JSXLoggedIn : JSXNotLoggedIn }</span>
            </button>
          </div>

          <div className="navbar-menu is-hidden-desktop-only">
            <div className="navbar-start">
              <span>{ this.props.loggedIn ? JSXLoggedIn : JSXNotLoggedIn }</span>
            </div>
            <div className="navbar-end">
              <span></span>
            </div>
          </div>
            
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