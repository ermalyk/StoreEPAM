import React from 'react';
import { Button, Item, Icon, Checkbox } from 'semantic-ui-react';

class ToDoItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Item className="to-do-item" >
        <Checkbox label="To-Do Item #1" />
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

export default ToDoItem;
