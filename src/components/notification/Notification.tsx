import React from 'react';
import cuid from 'cuid';
import ReactDOM from 'react-dom';
import { get } from 'lodash';
import Notice, { NoticeProps } from './Notice';
import { NotificationOptions } from './NotificationFactory';

import './style/style.scss';

interface NotificationProps {
  maxCount?: number,
  closeIcon?: React.ReactNode,
}

export interface NotificationInstanceProps extends NotificationOptions{
  container: HTMLElement;
}

export interface NotificationInstanceCallbackReturn {
  notice: (noticeProps: NoticeProps) => void,
  removeNotice: (key: string) => void,
  destroy: () => void,
  component: Notification,
  container: HTMLElement
}

class Notification extends React.Component<NotificationProps, {
  notices: NoticeProps[];
}> {
  node: any;
  static newNotificationInstance: (
    props: NotificationInstanceProps,
    callback: (n: NotificationInstanceCallbackReturn) => void
  ) => void;
  constructor(props: NotificationProps) {
    super(props);
    this.node = null;
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

Notification.newNotificationInstance = (
  props: NotificationInstanceProps,
  callback: (n: NotificationInstanceCallbackReturn) => void
) => {
  const div = props.container || document.createElement('div');
  document.body.appendChild(div);
  let called = false;
  function ref(notification: Notification) {
    if (called) {
      return;
    }
    called = true;
    callback({
      notice: (noticeProps: NoticeProps) => notification.addNotice(noticeProps),
      removeNotice: (key: string) => notification.removeNotice(key),
      component: notification,
      destroy: () => {
        ReactDOM.unmountComponentAtNode(div);
        div.parentNode && div.parentNode.removeChild(div);
      },
      container: div
    });
  }
  ReactDOM.render(<Notification {...props} ref={ref} />, div);
};

export default Notification;