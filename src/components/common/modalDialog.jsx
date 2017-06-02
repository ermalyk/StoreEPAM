import React, {PropTypes} from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';


// const ModalDialog = ({id, title, typeName}) => {
  class ModalDialog extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        name: ''
      };

    }

    render() {

      const {
        id,
        title,
        typeName,
        buttonTitle,
        callback
      } = this.props;

    //class ModalDialog extends React.Component {
      return (
        <Modal
          trigger={
            <Button animated="fade" className="icon-button">
              <Button.Content visible>
                <Icon name="edit"/>
              </Button.Content>
              <Button.Content hidden>
                {buttonTitle}
              </Button.Content>
            </Button>
            }
          closeIcon='close'>
          <Header icon='archive' content={'' + typeName + title} />
          <Modal.Content>
            <p>
              <strong>New Name: </strong>
              <input
                value={this.state.name}
                onChange={(evt) => this.setState({name: evt.target.value})}
              />
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button color='green' onClick={() => callback(id, this.state.name)}>
              <Icon name='checkmark' /> Yes
            </Button>
          </Modal.Actions>
        </Modal>
      )
    }
};

ModalDialog.PropTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  typeName: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired
};

export default ModalDialog
