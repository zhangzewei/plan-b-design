import React from "react";
import Prism from 'prismjs';
import Button from '../src/components/button';
import Modal from '../src/components/dialog';
import Notification from '../src/components/notification';

import "./prism.css";

export default {
  title: "Modal",
};


class ModalDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false
    }
  }

  render() {
    return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>弹出Modal</h1>
      <div style={{ display: 'flex' }}>
        <Button color="primary" onClick={() => this.setState({ visible: true })}>弹出Modal</Button>
        <Modal
          visible={this.state.visible}
          title="弹窗demo"
          onOk={() => Notification.message({ type: 'info', message: '弹窗点击确定按钮' })}
          onClose={() => this.setState({ visible: false })}
        >
          <div>modal content</div>
        </Modal>
      </div>
    </div>  
    );
  }
}

export const modal = () => <ModalDemo />;