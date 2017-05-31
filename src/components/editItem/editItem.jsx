import React, { PropTypes } from 'react';
import { Checkbox, Segment, TextArea } from 'semantic-ui-react';

class EditItem extends React.Component {
  render() {
    const {item} = this.props;

    console.log('item', item);
    return (
      <Segment padded>
        <input type="text" />
        <Checkbox />
        <TextArea placeholder='What to do?' autoHeight />
      </Segment>
    );
  }
}

EditItem.PropTypes = {
  item: PropTypes.object.isRequired
};

export default EditItem;
