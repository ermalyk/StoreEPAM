import React, { PropTypes } from 'react';
import ToDoItem from './ToDoItem.jsx';
import { Item } from 'semantic-ui-react';

class ToDoItemList extends React.Component {
  render() {
    const {items, pressedId, changeStateOfCheckedItem} = this.props;
    return (
      <div>
        <Item.Group divided>
          {
            (items||[]).map((item, i) => {
              return (
                <ToDoItem
                  item={item}
                  key={i}
                  changeStateOfCheckedItem={changeStateOfCheckedItem}
                  pressedId={pressedId}/>
              );
            })
          }
        </Item.Group>
      </div>
    );
  }
}

ToDoItemList.PropTypes = {
  items: PropTypes.object.isRequired,
  changeStateOfCheckedItem: PropTypes.func.isRequired,
  pressedId: PropTypes.string.isRequired
};

export default ToDoItemList;
