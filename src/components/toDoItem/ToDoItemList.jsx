import React, { PropTypes } from 'react';
import ToDoItem from './ToDoItem.jsx';
class ToDoItemList extends React.Component {
  render() {
    const {categories} = this.props;

    return (
      <div className="">
        {
          categories.map((category, i) => {
            return (
              <ToDoItem key={i} />
            );
          })
        }
      </div>
    );
  }
}

ToDoItemList.PropTypes = {
  categories: PropTypes.object.isRequired
}

export default ToDoItemList;
