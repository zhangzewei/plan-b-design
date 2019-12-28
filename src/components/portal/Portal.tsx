import React from 'react';
import ReactDom, { createPortal } from 'react-dom';
import { CommonComponentProps } from '../../common/Interface';

interface PortalProps extends CommonComponentProps {
  getContainer?: Function;
  visible?: boolean;
}

class Portal extends React.Component<PortalProps> {
  mountDom: HTMLElement;
  container: HTMLElement;
  constructor(props:PortalProps) {
    super(props);
    this.mountDom = document.createElement('div');
    this.container = props.getContainer
    ? props.getContainer()
    : window.document.body;
  }

  componentDidMount() {
    this.container.appendChild(this.mountDom);
  }

  componentWillUnmount() {
    if (this.mountDom) {
      this.container.removeChild(this.mountDom);
    }
  }

  getVisible = () => {
    if ('visible' in this.props) {
      return this.props.visible;
    }
    return true;
  }

  render() {
    const { children } = this.props;
    if (this.container && this.getVisible()) {
      if (createPortal) {
        return createPortal(children, this.mountDom);
      }
      ReactDom.render(children, this.mountDom);
    }
    return null;
  }
}

export default Portal;