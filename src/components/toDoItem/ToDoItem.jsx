import React, { PropTypes } from 'react';
import { Button, Item, Icon, Checkbox } from 'semantic-ui-react';

class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {
      item,
      changeStateOfCheckedItem,
      pressedId
    } = this.props;
    //{item.title}
    return (
      <Item className="to-do-item" >
        <Checkbox checked={item.checked} onChange={() => changeStateOfCheckedItem(pressedId, item)}/>
        <label>{item.title || 'No Items'}</label>
        <Button animated="fade" className="icon-button">
          <Button.Content visible>
            <Icon name="add square" />
          </Button.Content>
          <Button.Content hidden>
            Add
          </Button.Content>
        </Button>
      </Item>
    );
  }
}

ToDoItem.PropTypes = {
  item: PropTypes.object.isRequired,
  changeStateOfCheckedItem: PropTypes.func.isRequired,
  pressedId: PropTypes.string.isRequired
};

export default ToDoItem;
