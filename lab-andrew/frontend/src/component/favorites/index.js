import React from 'react';
import {connect} from 'react-redux';
import FavoritesForm from '../favorites-form';

import * as clientFavorites from '../../action/client-favorites';
import * as routes from '../../routes';

class Favorites extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
    
    let memberFunctions = Object.getOwnPropertyNames(Favorites.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }
  
  handleUpdate(favorites) {
    this.props.favoritesUpdate(favorites);
    this.setState({editing: false});
  }

  componentWillMount(){
    if (!this.props.loggedIn){
      this.props.history.push(routes.ROOT_ROUTE);
    }
    if (!this.props.favorites){
      this.props.history.push(routes.DASHBOARD_ROUTE);
    }
  }

  render() {
    let {favorites} = this.props;

    let JSXEditing, JSXDisplay;
    if (favorites){
      JSXEditing =
      <React.Fragment>
        <FavoritesForm favorites={favorites} onComplete={this.handleUpdate} />
        <button onClick={() => this.setState({editing: false})}> Cancel </button>
      </React.Fragment>;
      
      JSXDisplay =
      <React.Fragment>
        <p>{favorites.notes}</p>
        <button onClick={() => this.setState({editing: true})}> Edit Notes </button>
      </React.Fragment>;
    }

    const JSXFavorites = this.state.editing ? JSXEditing : JSXDisplay;

    return (
      <React.Fragment>
        <h1> Favorites </h1>
        <h3> Here is where you can keep notes about your favorite transform functions! </h3>
        <h2> My Notes: </h2>
        {JSXFavorites}
      </React.Fragment>

    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: !!state.token,
  favorites: state.clientFavorites,
});

const mapDispatchToProps = (dispatch) => ({
  favoritesUpdate: (favorites) => dispatch(clientFavorites.updateAction(favorites)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);