import React from 'react';
import classnames from 'classnames';
import { CommonComponentProps } from '../../common/Interface';

export interface NoticeProps extends CommonComponentProps {
  onClose: (n: any) => void;
  content: React.ReactNode;
  key: string;
  noticeId: string;
  duration?: number;
}

export type NoticeType = {
  key: string,
}

class Notice extends React.Component<NoticeProps> {
  key: string;
  constructor(props: NoticeProps) {
    super(props);
    this.key = this.props.noticeId;
  }



  render() {
    const { className, content, noticeId, onClose } = this.props;
    const classname = classnames('pb-notice', className);
    return <div
      id={noticeId}
      className={classname}
    >
      <div className="notice-content">{content}</div>
      <div className="notice-close-btn" onClick={() => {
        onClose(this.key);
      }}>X</div>
    </div>;
  }
}

export default Notice;