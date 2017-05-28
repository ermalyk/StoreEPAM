import React, { PropTypes } from 'react';
import ToDoItem from './ToDoItem.jsx';
import { Item } from 'semantic-ui-react';

class ToDoItemList extends React.Component {
  render() {
    const {items} = this.props;
    console.log('toDoItemList categories', items);
    return (
      <div>
        <Item.Group divided>
          {
            (items||[]).map((item, i) => {
              return (
                <ToDoItem item={item} key={i} />
              );
            })
          }
        </Item.Group>
      </div>
    );
  }
}

{/*<Item.Group divided>
        {
          categories.map((category, i) => {
            return (
              <ToDoItem key={i} />
            );
          })
        }
      </Item.Group>
ToDoItemList.PropTypes = {
  categories: PropTypes.object.isRequired
};*/}
ToDoItemList.PropTypes = {
  items: PropTypes.object.isRequired
};

export default ToDoItemList;
