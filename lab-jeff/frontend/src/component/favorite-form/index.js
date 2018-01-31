import React from 'react';

let emptyState = {
  description: '',
};

class FavoriteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.favorite ? props.favorite : emptyState;
    //-------------------------------------------------------------
    // Binding Handlers
    //-------------------------------------------------------------
    let memberFunctions = Object.getOwnPropertyNames(FavoriteForm.prototype);
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
  handleChange(event) {
    let { value } = event.target;
    this.setState({
      description: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(emptyState);
  }
  //---------------------------------------------------------------
  // Hooks
  //---------------------------------------------------------------
  componentWillReceiveProps(props) {
    if (props.profile) this.setState(props.profile);
  }

  render() {
    return (
      <form className="favorite-form" onSubmit={this.handleSubmit}>
        <textarea name="description" value={this.state.description} onChange={this.handleChange} />

        <button type="submit"> {this.props.favorite ? 'update' : 'create'} Description </button>
      </form>
    );
  }
}
//---------------------------------------------------------------
export default FavoriteForm;
