import React from 'react';
import * as authActions from '../../action/auth';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Header extends React.Component {
  render() {
    let JSXNotLoggedIn =
		<ul>
		  <li><Link to='/'> Go Home </Link> </li>
		  <li><Link to='/login'> Log In </Link> </li>
		  <li><Link to='/signup'> Sign Up </Link> </li>
		</ul>
    let JSXLoggedIn =
			<ul>
			  <li><Link to='/dashboard'> Dashboard </Link> </li>
			  <li><Link to='/upload'> Upload Image </Link> </li>
			  <li><Link to='/profile'> Go to Profile </Link> </li>
			</ul>

    return(
      <header className='header'>
        <h1>Slugga Slugga</h1>
        <nav>
          {
            this.props.loggedIn ? JSXLoggedIn : JSXNotLoggedIn
          }
        </nav>
        {
          this.props.loggedIn ? 
            <button onClick={this.props.doLogout}> Log Out </button> : undefined
        }
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: !!state.token,
});

const mapDispatchToProps = (dispatch) => ({
  doLogout: () => dispatch(authActions.logoutAction()),
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);