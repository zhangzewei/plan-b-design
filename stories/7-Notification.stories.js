import React from "react";
import Prism from 'prismjs';
import Button from '../src/components/button';
import Notification from '../src/components/notification';

import "./prism.css";

export default {
  title: "Notification",
};

const msgList = [
  {
    message: '左上角弹出',
    placement: 'left-top'
  },
  {
    message: '右上角弹出',
    placement: 'right-top'
  },
  {
    message: '右上角弹出3s消失',
    placement: 'right-top',
    duration: 3000
  }
];

const genNoticeBtn = (options) => (
  <Button
    variant="contained"
    color="primary"
    style={{ margin: '10px' }}
    onClick={() => Notification.notice(options)}
  >{options.message}</Button>
);

class NotificationBtns extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    const code = `
    const msgList = [
      {
        message: '左上角弹出',
        placement: 'left-top'
      },
      {
        message: '右上角弹出',
        placement: 'right-top'
      },
      {
        message: '右上角弹出3s消失',
        placement: 'right-top',
        duration: 3000
      }
    ];
    
    const genNoticeBtn = (options) => (
      <Button
        variant="contained"
        color="primary"
        style={{ margin: '10px' }}
        onClick={() => Notification.notice(options)}
      >{options.message}</Button>
    );

    const notification = () => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {msgList.map(m => genNoticeBtn(m))}
      </div>
    );
    `;
    return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>弹出消息</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {msgList.map(m => genNoticeBtn(m))}
      </div>
      <h3>Code</h3>
      <pre className="language-javascript">
        <code className="language-javascript">
          {code}
        </code>
      </pre>
    </div>  
    );
  }
}

export const notification = () => <NotificationBtns />;