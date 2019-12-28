import React, { Component } from 'react';
import { CommonComponentProps } from '../../common/Interface';
import Button from '../button';
import Icon from '../icon';
import './style/style.scss';

export interface DialogProps extends CommonComponentProps {
  title: string;
  header?: React.ReactNode | false;
  footer?: React.ReactNode | false;
  onOk?: () => void;
  onClose?: () => void;
}

export default class Dialog extends Component<DialogProps> {

  genModalFooter = () => {
    const { footer, onClose, onOk } = this.props;
    if (footer === false) return null;
    if (footer) return footer;
    return (
      <div className="dialog-footer">
        <Button
          className="modal-btn"
          onClick={onOk}
          variant="contained"
          color="primary">确定</Button>
        <Button
          className="modal-btn"
          onClick={onClose}
          variant="outlined"
          color="primary">取消</Button>
      </div>
    ); 
  }

  genModalHeader = () => {
    const {header, title, onClose } = this.props;
    if (header === false) return null;
    if (header) return header;
    return (
      <div className="dialog-header">
        <div className="title">{title}</div>
        <Icon type="close" className="close-icon" onClick={onClose} />
      </div>
    )
  };
  render() {
    const { children } = this.props;
    return (
      <div className="dialog-mask">
        <div className="dialog">
          {this.genModalHeader()}
          <div className="dialog-content">{children}</div>
          {this.genModalFooter()}
        </div>
      </div>
    )
  }
}
