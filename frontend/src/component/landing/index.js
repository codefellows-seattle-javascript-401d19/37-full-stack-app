import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';

import * as category from '../../action/category';

class Landing extends React.Component{
  render(){
    let {
      categorys,
      categoryCreate,
      categoryUpdate,
      categoryRemove,
    } = this.props;

    return(
      <div className="landing">
        <h1> Budget Tracking Form </h1>
        <CategoryForm handleComplete={categoryCreate} />
        {
          categorys.map((category) =>
            <CategoryItem
              key={category.id}
              category={category}
              categoryRemove={categoryRemove}
              categoryUpdate={categoryUpdate}/>
          )
        }
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    categorys: state.categorys,
  };
};

let mapDispatchToProps = (dispatch) => {
  return{
    categoryCreate: (data) => dispatch(category.createAction(data)),
    categoryUpdate: (data) => dispatch(category.updateAction(data)),
    categoryRemove: (data) => dispatch(category.removeAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing); //TODO: remove this: this takes what we need from the store and sets it up in the propsso we can use it in the landing constructor
