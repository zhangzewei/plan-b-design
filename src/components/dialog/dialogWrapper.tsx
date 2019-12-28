import React, {Component} from "react";
import Portal from "../portal/Portal";
import Dialog, {DialogProps} from "./dialog";

export interface DialogWrapperProps extends DialogProps {
  visible?: boolean;
  getContainer?: () => HTMLElement;
}

class DialogWrapper extends Component<DialogWrapperProps> {
  render() {
    const {getContainer, children, visible, ...others} = this.props;
    const defaultContainer = () => window.document.body;
    if (visible) {
      return (
        <Portal getContainer={getContainer || defaultContainer}>
          <Dialog
            {...others}
          >{children}</Dialog>
        </Portal>
      );
    }
    return null;
  }
}

export default DialogWrapper;
