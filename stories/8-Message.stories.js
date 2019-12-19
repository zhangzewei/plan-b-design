import React from "react";
import Prism from 'prismjs';
import Button from '../src/components/button';
import Notification from '../src/components/notification';

import "./prism.css";

export default {
  title: "Message",
};

const msgList = [
  {
    message: 'info with maxCount = 5',
    type: 'info',
    maxCount: 5
  },
  {
    message: 'error',
    type: 'error'
  },
  {
    message: 'success',
    type: 'success'
  },
  {
    message: 'warning',
    type: 'warning',
  },
];

const genNoticeBtn = (options) => (
  <Button
    variant="contained"
    color="primary"
    style={{ margin: '10px' }}
    onClick={() => Notification.message(options)}
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
        message: 'info with maxCount = 5',
        type: 'info',
        maxCount: 5
      },
      {
        message: 'error',
        type: 'error'
      },
      {
        message: 'success',
        type: 'success'
      },
      {
        message: 'warning',
        type: 'warning',
      },
    ];
    
    const genNoticeBtn = (options) => (
      <Button
        variant="contained"
        color="primary"
        style={{ margin: '10px' }}
        onClick={() => Notification.message(options)}
      >{options.message}</Button>
    );

    const messages = () => (
      <div style={{ display: 'flex' }}>
        {msgList.map(m => genNoticeBtn(m))}
      </div>
    );
    `;
    return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>弹出Message</h1>
      <div style={{ display: 'flex' }}>
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

export const message = () => <NotificationBtns />;