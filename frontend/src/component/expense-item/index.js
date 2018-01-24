import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';
import * as expenseActions from '../../action/expense';

class ExpenseItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {editing : false};

    let memberFunctions = Object.getOwnPropertyNames(ExpenseItem.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleUpdate(expense){
    this.props.categoryUpdate(expense);
    this.setState({editing : false});
  }

  render(){
    let {
      expense,
      expenseRemove,
      expenseUpdate} = this.props;

    let contentJSX = <h2>{expense.name} || price: ${expense.price}</h2>;
    let editingJSX = <ExpenseForm expense={expense} handleComplete={this.handleUpdate} />;
    let renderJSX = this.state.editing ? editingJSX : contentJSX;

    return(
      <div key={expense.id}>
        <button className="delete" onClick={() => expenseRemove(expense)}> delete </button>
        <div className="expense-render" onDoubleClick={()=> this.setState({editing : true})}>
          {renderJSX}
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  expenses : state.expenses,
});

let mapDispatchToProps = (dispatch) => ({
  expenseUpdate : (data) => dispatch(expenseActions.updateAction(data)),
  expenseRemove : (data) => dispatch(expenseActions.removeAction(data)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);
