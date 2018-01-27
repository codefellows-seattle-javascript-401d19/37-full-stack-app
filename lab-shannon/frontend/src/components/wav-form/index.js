import React from 'react';

const emptyState = {
  name: '',
};

class WavForm extends React.Component{
  constructor(props){
    super(props);
    this.state = emptyState;
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(event){
    let {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState(emptyState);
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type = 'text'
          name = 'name'
          placeholder = 'wav file name'
          value = {this.state.name}
          onChange = {this.onChange}
        />
        <button type='submit'>Your Wav File here</button>
      </form>
    );
  }
}

export default WavForm;
