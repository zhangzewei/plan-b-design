import React from 'react';
import classnames from 'classnames';
import { CommonComponentProps } from '../../common/Interface';

export interface NoticeProps extends CommonComponentProps {
  onClose: (key: string) => void;
  content: React.ReactNode;
  key: string;
  noticeId: string;
  duration?: number;
  disableIcon?: boolean;
}

export type NoticeType = {
  key: string,
}

class Notice extends React.Component<NoticeProps> {
  key: string;
  timer: NodeJS.Timeout | null;
  constructor(props: NoticeProps) {
    super(props);
    this.key = this.props.noticeId;
    this.timer = null;
  }

  componentDidMount() {
    const { duration, onClose } = this.props;
    if (duration) {
      this.timer = setTimeout(() => {
        onClose(this.key);
      }, duration);
    }
  }

  onMouseEnter = (e: React.MouseEvent) => {
    e.preventDefault();
    const { duration } = this.props;
    if (duration) {
      clearTimeout(this.timer as NodeJS.Timeout);
      this.timer = null;
    }
  }

  onMouseLeave = (e: React.MouseEvent) => {
    e.preventDefault();
    const { duration, onClose } = this.props;
    if (duration) {
      this.timer = setTimeout(() => {
        onClose(this.key);
      }, duration);
    }
  }

  render() {
    const { className, content, noticeId, disableIcon, style, onClose } = this.props;
    const classname = classnames('pb-notice', className);
    const closeIcon = disableIcon ? null : (
      <div className="notice-close-btn" onClick={() => {
        onClose(this.key);
      }}>X</div>);
    return <div
      id={noticeId}
      className={classname}
      onMouseEnter={this.onMouseEnter}
      onMouseLeave={this.onMouseLeave}
      style={style}
    >
      <div className="notice-content">{content}</div>
      {closeIcon}
    </div>;
  }
}

export default Notice;