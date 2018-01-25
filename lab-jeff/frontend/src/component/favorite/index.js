import React from 'react';
import { connect } from 'react-redux';
import FavoriteForm from '../favorite-form';

import * as favoriteActions from '../../action/favorite';
import * as routes from '../../routes';

class Favorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
    //-------------------------------------------------------------
    // Binding Handlers
    //-------------------------------------------------------------
    let memberFunctions = Object.getOwnPropertyNames(Favorite.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
    //-------------------------------------------------------------
  }

  //---------------------------------------------------------------
  // Member Functions
  //---------------------------------------------------------------

  handleUpdate(favorite) {
    this.props.favoriteUpdate(favorite);
    this.setState({ editing: false });
  }
  //---------------------------------------------------------------
  // Hooks
  //---------------------------------------------------------------
  render() {
    let { favorite } = this.props;

    let JSXEditing = null;
    let JSXDisplay = null;
    let JSXProfile = null;

    JSXEditing = (
      <div>
        <FavoriteForm favorite={favorite} onComplete={this.handleUpdate} />
        <button onClick={() => this.setState({ editing: false })}> cancel </button>
      </div>
    );
    JSXDisplay = (
      <div>
        <p>{favorite.description}</p>
        <button onClick={() => this.setState({ editing: true })}> Edit Bio </button>
      </div>
    );

    JSXProfile = (
      <div>
        <h2> {favorite.description} </h2>
        {this.state.editing ? JSXEditing : JSXDisplay}
      </div>
    );

    return (
      <div>
        <h2> profile </h2>
        {JSXProfile}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  favorite: state.favorite,
});

const mapDispatchToProps = dispatch => ({
  favoriteUpdate: favorite => dispatch(favoriteActions.updateAction(favorite)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
