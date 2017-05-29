import React, { PropTypes } from 'react';
import { Button, Item, Icon, Checkbox } from 'semantic-ui-react';

class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {
      item
    } = this.props;
    //{item.title}
    console.log('todoitem item', item);
    return (
      <Item className="to-do-item" >
        <Checkbox />
        <label>{item.title}</label>
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
  // item: PropTypes.object.isRequired
};

export default ToDoItem;
