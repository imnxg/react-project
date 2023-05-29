import React from 'react';
import { Modal, Button } from '@arco-design/web-react';
import Draggable from 'react-draggable';

function AlertMessage() {
  const [visible, setVisible] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);
  return (
    <div>
      {/* <Button onClick={() => setVisible(true)} type='primary'>
        Open Draggable Modal
      </Button> */}
      <Modal
        style={{ cursor: 'move' }}
        title='Modal Title'
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        autoFocus={false}
        onMouseOver={() => {
          disabled && setDisabled(false);
        }}
        onMouseOut={() => {
          !disabled && setDisabled(true);
        }}
        modalRender={(modal) => <Draggable disabled={disabled}>{modal}</Draggable>}
      >
        <p>
          You can customize modal body text by the current situation. This modal will be closed
          immediately once you press the OK button.
        </p>
      </Modal>
    </div>
  );
}

export default AlertMessage;
