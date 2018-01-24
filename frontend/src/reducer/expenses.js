const emptyState = {};

export default (state = emptyState, {type, payload}) => {
  let categoryID, categoryExpenses, updatedExpenses, newState;

  switch(type){
    case 'CATEGORY_CREATE':
      return {...state, [payload.id] : []};
    case 'CATEGORY_REMOVE':
      newState = {...state};
      delete newState[payload.id];
      return newState;

    case 'EXPENSE_CREATE':
      categoryID = payload.categoryID;
      categoryExpenses = state[categoryID];
      updatedExpenses = [...categoryExpenses, payload];
      return {
        ...state, [payload.categoryID] : updatedExpenses,
      };
    case 'EXPENSE_UPDATE':
      categoryID = payload.categoryID;
      categoryExpenses = state[categoryID];
      updatedExpenses = categoryExpenses.map(
        expense => expense.id === payload.id ? payload : expense);
      return {
        ...state, [payload.categoryID] : updatedExpenses,
      };
    case 'EXPENSE_REMOVE':
      categoryID = payload.categoryID;
      categoryExpenses = state[categoryID];
      updatedExpenses = categoryExpenses.filter(
        expense => expense.id !== payload.id);
      return {
        ...state, [payload.categoryID] : updatedExpenses,
      };
    case 'EXPENSE_CLEAR':
      return emptyState;
    default:
      return state;
  }
};
