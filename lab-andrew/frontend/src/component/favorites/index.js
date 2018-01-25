import React from 'react';
import {connect} from 'react-redux';
import FavoritesForm from '../favorites-form';
import {Redirect} from 'react-router-dom';

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
  render() {
    let {favorites} = this.props;

    if (!this.props.loggedIn) {
      return (<Redirect to={routes.ROOT_ROUTE}/>);
    }

    if (!favorites) {
      return (<Redirect to={routes.ROOT_ROUTE}/>);
    }

    const JSXEditing =
      <React.Fragment>
        <FavoritesForm favorites={favorites} onComplete={this.handleUpdate} />
        <button onClick={() => this.setState({editing: false})}> Cancel </button>
      </React.Fragment>;
      
    const JSXDisplay =
      <React.Fragment>
        <p>{favorites.notes}</p>
        <button onClick={() => this.setState({editing: true})}> Edit Notes </button>
      </React.Fragment>;

    const JSXFavorites = this.state.editing ? JSXEditing : JSXDisplay;

    return (
      <React.Fragment>
        <h2> favorites </h2>
        {JSXFavorites}
      </React.Fragment>

    );
  }
}

const mapStateToProps = (state) => ({
  favorites: state.clientFavorites,
  loggedIn: !!state.token,
});

const mapDispatchToProps = (dispatch) => ({
  favoritesUpdate: (favorites) => dispatch(clientFavorites.updateAction(favorites)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);