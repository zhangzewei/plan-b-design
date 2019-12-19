import React, { Component } from 'react';
import Portal from '../portal/Portal';
import Dialog, { DialogProps } from './dialog';

export interface DialogWrapperProps extends DialogProps {
  visible?: boolean;
  getContainer?: () => void;
}

class DialogWrapper extends Component<DialogWrapperProps, {
  visible: boolean
}>{
  constructor(props: DialogWrapperProps) {
    super(props);
    this.state = {
      visible: props.visible || false,
    }
  }

  componentWillReceiveProps(nextProps: DialogWrapperProps) {
    this.setState({
      visible: nextProps.visible || false,
    });
  }

  render() {
    const { visible } = this.state;
    const { getContainer, children, onClose } = this.props;
    if (visible) {
      return (
        <Portal
          visible={visible}
          getContainer={getContainer}
        >
          <Dialog
            onClose={onClose}
          >
            {children}
          </Dialog>
        </Portal>
      );
    }
    return null;
  }
}

export default DialogWrapper;