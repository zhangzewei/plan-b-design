import React, { Component } from 'react';
import { CommonComponentProps } from '../../common/Interface';

import './style/style.scss';

export interface DialogProps extends CommonComponentProps {
  onOk?: () => void;
  onClose?: () => void;
}

export default class Dialog extends Component<DialogProps> {
  render() {
    const { onClose, children } = this.props;
    return (
      <div className="dialog-mask">
        <div className="dialog">
          <div className="dialog-header">header</div>
          <div className="dialog-content">{children}</div>
          <div className="dialog-footer">
            <button onClick={onClose}>关闭</button>
          </div>
        </div>
        
      </div>
    )
  }
}
