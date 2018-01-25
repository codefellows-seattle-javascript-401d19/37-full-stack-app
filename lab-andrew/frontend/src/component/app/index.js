import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from '../header';
import Landing from '../landing';
import Favorites from '../favorites';
import Dashboard from '../dashboard';
import AuthRedirect from '../auth-redirect';

import * as clientFavorites from '../../action/client-favorites';

class App extends React.Component {
  componentWillMount(){
    if (this.props.loggedIn) {
      this.props.fetchClientFavorites();
      // .catch(console.error);
    }
  }

  render(){
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <Header/>
            <Route path='*' component={AuthRedirect}/>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/signup' component={Landing}/>
            <Route exact path='/login' component={Landing}/>
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route exact path='/favorites' component={Favorites} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  loggedIn: !!state.token,
});

const mapDispatchToProps = (dispatch) => ({
  fetchClientFavorites: () => dispatch(clientFavorites.fetchAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);