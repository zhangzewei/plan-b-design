import React from "react";
import Prism from 'prismjs';
import Icon from '../src/components/icon';

import './styles/icons.css';

export default {
  title: "Icons",
};

class Icons extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false
    }
    this.icons = [
      'right',
      'left',
      'up',
      'down',
      'check',
      'ellipsis',
      'close',
      'check-circle-fill',
      'close-circle-fill',
      'info-circle-fill',
      'question-circle-fill',
      'warning-circle-fill',
      'check-square-fill',
      'minus-square-fill',
      'close-square-fill',
      'zoomout',
      'zoomin',
      'search',
    ];
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  renderIcons = () => this.icons.map(i => 
    <div className="icon-item">
      <Icon type={i} className="icon" />
      <div className="icon-name">{i}</div>
    </div>
  );

  render() {
    const code = `
      <Icon type="type" className="iconClass" />
    `;
    return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Icons</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {this.renderIcons()}
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

export const icons = () => <Icons />;