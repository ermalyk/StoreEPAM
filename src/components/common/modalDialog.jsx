import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

const ModalDialog = (callback) => (
  //class ModalDialog extends React.Component {

  <Modal
    trigger={
      <Button animated="fade" className="icon-button" onClick={() => callback()}>
        <Button.Content visible>
          <Icon name="edit"/>
        </Button.Content>
        <Button.Content hidden>
          edit
        </Button.Content>
      </Button>
      }
    closeIcon='close'>
    <Header icon='archive' content='Archive Old Messages' />
    <Modal.Content>
      <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
    </Modal.Content>
    <Modal.Actions>
      <Button color='red'>
        <Icon name='remove' /> No
      </Button>
      <Button color='green'>
        <Icon name='checkmark' /> Yes
      </Button>
    </Modal.Actions>
  </Modal>
);

export default ModalDialog
