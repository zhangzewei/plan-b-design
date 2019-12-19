import React from 'react';
import { createPortal } from 'react-dom';
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
    : document.getElementsByTagName('body');
  }

  componentWillMount() {
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
      return createPortal(children, this.mountDom);
    } else {
      return null;
    }
  }
}

export default Portal;