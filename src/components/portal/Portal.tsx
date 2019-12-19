import React from 'react';
import ReactDom, { createPortal } from 'react-dom';
import { CommonComponentProps } from '../../common/Interface';

interface PortalProps extends CommonComponentProps {
  getContainer?: () => HTMLElement;
}

class Portal extends React.Component<PortalProps> {
  container: HTMLElement | null = null;

  componentDidMount() {
    this.createContainer();
  }

  componentWillUnmount() {
    this.removeContainer();
  }

  createContainer = () => {
    if (this.props.getContainer) {
      this.container = this.props.getContainer();
      // Since the update of the component is due to a change in prop or state,
      // and the dynamic generation of the dom node here does not cause re-render,
      // manual update is required
      this.forceUpdate();
    }
  };

  removeContainer = () => {
    if (this.container) {
      if (this.container.parentNode) {
        this.container.parentNode.removeChild(this.container);
      }
    }
  };

  render() {
    const { children } = this.props;

    if (this.container) {
      if (createPortal) {
        return createPortal(children, this.container);
      }
      ReactDom.render(children, this.container);
    }
    return null;
  }
}

export default Portal;
