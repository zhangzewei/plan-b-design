import React, {Component} from "react";
import Portal from "../portal/Portal";
import Dialog, {DialogProps} from "./dialog";

export interface DialogWrapperProps extends DialogProps {
  visible?: boolean;
  getContainer?: () => HTMLElement;
}

class DialogWrapper extends Component<DialogWrapperProps> {
  render() {
    const {getContainer, children, onClose, visible} = this.props;
    if (visible) {
      return (
        <Portal getContainer={getContainer}>
          <Dialog onClose={onClose}>{children}</Dialog>
        </Portal>
      );
    }
    return null;
  }
}

export default DialogWrapper;
