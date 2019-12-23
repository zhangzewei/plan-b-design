import React from 'react';
import Prism from 'prismjs';
import Dropdown from '../src/components/dropdown';

import './prism.css';
import Card, { CardContent } from '../src/components/card';

export default {
  title: 'Dropdown',
};

const overlayArr = ['first text', 'second text', 'third text'];

const DropdownOverlay = (
  <Card>
    <CardContent>
      {
        overlayArr.map((item) => (
          <div key={item} onClick={() => {
            console.log('li click');
          }}>{item}
          </div>
        ))
      }
    </CardContent>
  </Card>
);

class DropdownCustom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownVisible: false,
    };
  }

  render() {

    return (
      <Dropdown
        overlay={DropdownOverlay}
        visible={this.state.dropdownVisible}
        trigger={['custom']}
      >
        <input
          onFocus={() => this.setState({ dropdownVisible: true })}
          onBlur={() => this.setState({ dropdownVisible: false })}
        />
      </Dropdown>
    );
  }
}

class CustomerDemo extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    const code = `
      class DropdownCustom extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            dropdownVisiable: false,
          }
        }
        render() {
          return (
            <Dropdown
              overlay={DropdownVoerlay}
              visiable={this.state.dropdownVisiable}
              trigger={["custom"]}
            >
              <input 
                onFocus={() => this.setState({ dropdownVisiable: true })}
                onBlur={() => this.setState({ dropdownVisiable: false })}
              />
            </Dropdown>
          );
        }
      }`;
    return (
      <>
        <h3>Demo</h3>
        <DropdownCustom />
        <h3>Code</h3>
        <pre className="language-javascript">
          <code className="language-javascript">
            {code}
          </code>
        </pre>
      </>
    );
  }
}

class HoverDemo extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    const code = `
    export const clickDemo = () => (
      <Dropdown
        overlay={DropdownVoerlay}
        trigger={["hover"]}
      >
        <div>click me</div>
      </Dropdown>
    );`;
    return (
      <>
        <h3>Demo</h3>
        <Dropdown
          overlay={DropdownOverlay}
          trigger={['hover']}
        >
          <div>hover me</div>
        </Dropdown>
        <h3>Code</h3>
        <pre className="language-javascript">
          <code className="language-javascript">
            {code}
          </code>
        </pre>
      </>
    );
  }
}

class ClickDemo extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    const code = `
    export const clickDemo = () => (
      <Dropdown
        overlay={DropdownVoerlay}
        trigger={["click"]}
      >
        <div>click me</div>
      </Dropdown>
    );`;
    return (
      <>
        <h3>Demo</h3>
        <Dropdown
          overlay={DropdownOverlay}
          trigger={['click']}
        >
          <div>click me</div>
        </Dropdown>
        <h3>Code</h3>
        <pre className="language-javascript">
          <code className="language-javascript">
            {code}
          </code>
        </pre>
      </>
    );
  }
}

export const customerDemo = () => (
  <CustomerDemo />
);

export const hoverDemo = () => (
  <HoverDemo />
);

export const clickDemo = () => (
  <ClickDemo />
);
