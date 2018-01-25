import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../header';
import Landing from '../landing';
import Favorite from '../favorite';
import Dashboard from '../dashboard';
import AuthRedirect from '../auth-redirect';

import * as favoriteAction from '../../action/favorite';
import { FAVORITE_ROUTE } from '../../routes';

class App extends React.Component {
  componentDidMount() {
    if (this.props.loggedIn) {
      this.props.fetchFavorite().catch(console.error);
    }
  }
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="*" component={AuthRedirect} />
            <Route exact path="/" component={Landing} />
            <Route exact path="/signup" component={Landing} />
            <Route exact path="/login" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/favorite" component={Favorite} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  loggedIn: !!state.token,
});

const mapDispatchToProps = dispatch => ({
  fetchClientProfile: () => dispatch(favoriteAction.fetchAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
