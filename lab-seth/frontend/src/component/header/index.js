import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-redux';
import * as authActions from '../../action/auth';

class Header extends React.Component {
  render(){
    let JSXNotLoggedIn = 
    <ul>

    </ul>



    return(
      <header className='header'>
        <h1>Sluggream</h1>
        <nav>
          {this.props.loggedIn ? JSXLoggedIn : JSXNotLoggedIn}
        </nav>
        {this.props.loggedIn ? 
          <button oncClick={this.props.doLogout}> Logout </button> :
          undefined
        }
      </header>
    )
  }

}

const mapStateToProps = (state) => ({
  loggedIn: !!state.token;
})

const mapDispatchToProps = (dispath) => ({
  doLogout: () => dispath(authActions.logoutAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);