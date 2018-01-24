import React from 'react';
import {connect} from 'react-redux';
import ExpenseItem from '../expense-item';
import ExpenseForm from '../expense-form';
import CategoryForm from '../category-form';

import * as expenseActions from '../../action/expense';
import * as categoryActions from '../../action/category';

class CategoryItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {editing : false};

    let memberFunctions = Object.getOwnPropertyNames(CategoryItem.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleUpdate(category){
    this.props.categoryUpdate(category);
    this.setState({editing : false});
  }

  render(){
    let {
      expenses,
      expenseCreate,
      category,
      categoryRemove,
      categoryUpdate} = this.props;

    let categoryExpenses = expenses[category.id];

    let editingJSX = <CategoryForm category={category} handleComplete={this.handleUpdate} />;
    let contentJSX =
      <div>
        <h2 onDoubleClick={() => this.setState({editing : true})}>{category.name} || budget: ${category.budget}</h2>
        <button className="category-delete" onClick={() => categoryRemove(category)}> delete </button>
      </div>;
    let renderJSX = this.state.editing ? editingJSX : contentJSX;

    return(
      <div className="category" key={category.id}>
        {renderJSX}
        <ExpenseForm category={category} handleComplete={expenseCreate} />
        <div className="expense-container">
          {
            categoryExpenses.map((expense) => <ExpenseItem expense={expense} key={expense.id} />)
          }
        </div>

      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  expenses : state.expenses,
});

let mapDispatchToProps = (dispatch) => ({
  expenseCreate : (data) => dispatch(expenseActions.createAction(data)),
  categoryUpdate : (data) => dispatch(categoryActions.updateAction(data)),
  categoryRemove : (data) => dispatch(categoryActions.removeAction(data)),
});


export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
