import React from 'react';
import cuid from 'cuid';
import Notice, { NoticeProps } from './Notice';

import './style/style.scss';

interface NotificationProps {
  maxCount?: number,
  closeIcon?: React.ReactNode,
}

class Notification extends React.Component<NotificationProps, {
  notices: NoticeProps[];
}> {
  constructor(props: NotificationProps) {
    super(props);
    this.state = {
      notices: [],
    }
  }

  addNotice = (notice: NoticeProps) => {
    const key = notice.noticeId = notice.noticeId || cuid();
    const { maxCount } = this.props;
    this.setState(previousState => {
      const notices = previousState.notices;
      const noticeIndex = notices.map(v => v.noticeId).indexOf(key);
      const updatedNotices = notices.concat();
      if (noticeIndex !== -1) {
        updatedNotices.splice(noticeIndex, 1, notice);
      } else {
        if (maxCount && notices.length >= maxCount) {
          updatedNotices.shift();
        }
        notice.key = notice.noticeId;
        updatedNotices.push(notice);
      }
      return {
        notices: updatedNotices,
      };
    });
  }

  removeNotice = (key: string) => this.setState(previousState => ({
      notices: previousState.notices.filter(n => n.noticeId !== key),
    }));

  render() {
    const { notices } = this.state;
    return <div className="notices">{notices.map((n: NoticeProps) => <Notice {...n} onClose={this.removeNotice} />)}</div>;
  }
}

export default Notification;
