import React from "react";
import ReactDom, {createPortal} from "react-dom";
import {CommonComponentProps} from "../../common/Interface";

interface PortalProps extends CommonComponentProps {
  getContainer?: () => HTMLElement;
}

class Portal extends React.Component<PortalProps> {
  container: HTMLElement | null = null;

  constructor(props: PortalProps) {
    super(props);
    this.createContainer();
  }

  componentDidMount() {
    this.createContainer();
  }

  componentWillUnmount() {
    this.removeContainer();
  }

  createContainer = () => {
    if (this.props.getContainer) {
      this.container = this.props.getContainer();
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
    const {children} = this.props;

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
