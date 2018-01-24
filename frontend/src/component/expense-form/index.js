import './_expense-form.scss';
import React from 'react';

let emptyState = {
  name: '',
  price: 0,
};

class ExpenseForm extends React.Component{
  constructor(props){
    super(props);
    this.state = props.expense || emptyState;

    let memberFunctions = Object.getOwnPropertyNames(ExpenseForm.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }


  handleChange(event){
    let {name, value} = event.target;
    this.setState({[name] : value});
  }

  handleSubmit(event){
    event.preventDefault();
    let categoryID = this.props.category ? this.props.category.id : this.props.expense.categoryID;
    this.props.handleComplete({
      ...this.state,
      categoryID,
    });
    this.setState(emptyState);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.expense)
      this.setState(nextProps.expense);
  }

  render() {
    let buttonText = this.props.expense ? 'update expense' : 'create expense';
    let nameText = this.props.expense ? this.props.expense.name : 'Expense Form';

    return(
      <form
        onSubmit = {this.handleSubmit}
        className = "expense-form">

        <input
          type="text"
          name="name"
          placeholder="expense name"
          value={this.state.name}
          onChange={this.handleChange}
          required={true}
        />

        <input
          type="number"
          name="price"
          placeholder="price"
          value={this.state.price}
          onChange={this.handleChange}
          required={true}
        />
        <button type="submit"> {buttonText} </button>

      </form>
    );
  }
}

export default ExpenseForm;
