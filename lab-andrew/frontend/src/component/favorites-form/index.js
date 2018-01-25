import React from 'react';

let emptyState = {
  favorites: '',
  notes: '',
};

class FavoritesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.favorites ? props.favorites : emptyState;
    let memberFunctions = Object.getOwnPropertyNames(FavoritesForm.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }
  
  handleChange(event) {
    let {value} = event.target;
    this.setState({
      notes: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(emptyState);
  }

  componentWillReceiveProps(props) {
    if (props.favorites)
      this.setState(props.favorites);
  }

  render() {
    return (
      <form
        className='favorites-form'
        onSubmit={this.handleSubmit}>

        <textarea
          name='notes'
          value={this.state.notes}
          onChange={this.handleChange}
        />

        <button type='submit'> {this.props.favorites ? 'update' : 'create'} favorites </button>
      </form>
    );
  }
}

export default FavoritesForm;