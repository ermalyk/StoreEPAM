import React, { PropTypes } from 'react';
import ToDoItem from './ToDoItem.jsx';
import { Item } from 'semantic-ui-react';

class ToDoItemList extends React.Component {
  render() {
    const {categories} = this.props;

    return (
      <Item.Group divided>
        {
          categories.map((category, i) => {
            return (
              <ToDoItem key={i} />
            );
          })
        }
      </Item.Group>
    );
  }
}

ToDoItemList.PropTypes = {
  categories: PropTypes.object.isRequired
}

export default ToDoItemList;
