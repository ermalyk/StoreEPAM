import React from 'react';

class ToDoItem extends React.Component {

  render() {
    return (
      <div className="to-do-item">
        <input type="checkbox"/>
        <label>{'To-Do Item #1'}</label>
        <button className="addItem"></button>
      </div>
    );
  }
}

export default ToDoItem;
