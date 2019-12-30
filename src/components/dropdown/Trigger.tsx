import React, { Component, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { cloneDeep } from 'lodash';
import Portal from '../portal/Portal';
import Popup from './Popup';
import { offset, contains } from '../../common/utils';
import { CommonComponentProps } from '../../common/Interface';

export interface TriggerProps extends CommonComponentProps {
  action: ['click', 'hover', 'custom'];
  popup: React.ReactNode | (() => React.ReactNode);
  visible?: boolean;
  className?: string;
  style?: React.CSSProperties,
  popupClassName?: string;
  popupStyle?: React.CSSProperties;
  onClick?: Function,
  onVisibleChange?: Function,
  getPopupContainer?: Function;
}

export function fillRef<T>(ref: React.Ref<T>, node: T) {
  if (typeof ref === 'function') {
    ref(node);
  } else if (typeof ref === 'object' && ref && 'current' in ref) {
    (ref as any).current = node;
  }
}

export function composeRef<T>(...refs: React.Ref<T>[]): React.Ref<T> {
  return (node: T) => {
    refs.forEach(ref => {
      fillRef(ref, node);
    });
  };
}

class Trigger extends Component<TriggerProps, {
  popupVisible: boolean;
}> {
  popupContainer: HTMLElement;
  node: any;
  popupRef: any;
  clickPopupOutSideFun: void | null;
  delayTimer: ReturnType<typeof setTimeout> | null;

  constructor(props: TriggerProps) {
    super(props);
    this.state = {
      popupVisible: false,
    };
    this.popupContainer = this.creatPopupContainer();
    this.node = React.createRef();
    this.popupRef = React.createRef();
    this.clickPopupOutSideFun = null;
    this.delayTimer = null;
  }

  componentWillReceiveProps(nextProps: TriggerProps) {
    if (this.isCustomerToHideOrShow()) {
      this.setState({ popupVisible: nextProps.visible !== undefined ? nextProps.visible : false });
    }
  }

  componentWillUnmount() {
    this.clearOutsideHandler();
  }

  getPortalContainer = () => {
    const {
      popup,
      popupClassName,
      popupStyle,
    } = this.props;
    const { popupVisible } = this.state;
    const mouseProps: HTMLAttributes<HTMLElement> = {};

    if (this.isHoverToHideOrShow()) {
      mouseProps.onMouseEnter = this.onPopupMouseEnter;
      mouseProps.onMouseLeave = this.onPopupMouseLeave;
    }

    return (
      <Popup
        {...mouseProps}
        className={popupClassName}
        style={popupStyle}
        point={this.getRefPoint()}
        visible={popupVisible}
        ref={composeRef(this.popupRef)}
      >
        {typeof popup === 'function' ? popup() : popup}
      </Popup>
    );
  };

  creatPopupContainer = () => {
    const popupContainer = document.createElement('div');
    popupContainer.style.position = 'absolute';
    popupContainer.style.top = '0';
    popupContainer.style.left = '0';
    popupContainer.style.width = '100%';
    return popupContainer;
  };

  getContainer = () => {
    const { props } = this;
    if (!this.popupContainer) {
      this.creatPopupContainer();
    }
    const mountNode = props.getPopupContainer
      ? props.getPopupContainer()
      : window.document.body;
    mountNode.appendChild(this.popupContainer);
    return this.popupContainer;
  };

  isClickToHideOrShow = () => {
    const { action } = this.props;
    return action.indexOf('click') !== -1;
  };

  isHoverToHideOrShow = () => {
    const { action } = this.props;
    return action.indexOf('hover') !== -1;
  };

  isCustomerToHideOrShow = () => {
    const { action } = this.props;
    return action.indexOf('custom') !== -1;
  };

  delaySetPopupVisible = (visible: boolean, delayS: number, event: React.MouseEvent) => {
    this.clearDelayTimer();

    if (delayS === 0 || !!delayS) {
      event.persist(); // https://www.cnblogs.com/jimaww/p/11041344.html
      this.delayTimer = setTimeout(() => {
        this.setPopupVisible(visible, event);
      }, delayS * 1000);
      return;
    }

    this.setPopupVisible(visible, event);
  };

  setPopupVisible = (visible: boolean, event: React.MouseEvent) => {
    if (this.state.popupVisible !== visible) {
      this.setState({ popupVisible: visible });
      this.props.onVisibleChange && this.props.onVisibleChange(visible, event);
    }
  };

  clearDelayTimer = () => {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = null;
    }
  };

  getRefPoint = () => {
    if (this.node.current) {
      return offset(this.node.current);
    } else {
      return {
        left: 0,
        top: 0,
      };
    }
  };

  onMouseEnter = (e: React.MouseEvent) => {
    this.delaySetPopupVisible(true, 0, e);
  };

  onMouseLeave = (e: React.MouseEvent) => {
    this.delaySetPopupVisible(false, 0, e);
  };

  onPopupMouseEnter = () => {
    this.clearDelayTimer();
  };

  onPopupMouseLeave = (e: React.MouseEvent) => {
    this.delaySetPopupVisible(false, 0, e);
  };

  onClick = (e: React.MouseEvent) => {
    this.setPopupVisible(!this.state.popupVisible, e);
  };

  onClickPopupOutSide = (e: React.MouseEvent) => {
    if (contains(this.node.current, e.target)) return;
    if (this.state.popupVisible && contains(this.popupRef.current, e.target)) return;
    this.setPopupVisible(false, e);
  }

  clearOutsideHandler() {
      if (this.clickPopupOutSideFun) {
      window.document.removeEventListener('click', (this.clickPopupOutSideFun as any));
      this.clickPopupOutSideFun = null;
    }	  
  }

  render() {
    const {
      children,
      className,
    } = this.props;

    const { popupVisible } = this.state;

    const childProps: HTMLAttributes<HTMLElement> = {};

    if (this.isHoverToHideOrShow()) {
      this.clearOutsideHandler();
      childProps.onMouseEnter = this.onMouseEnter;
      childProps.onMouseLeave = this.onMouseLeave;
    }

    if (this.isClickToHideOrShow()) {
      childProps.onClick = this.onClick;
      this.clickPopupOutSideFun = window.document.addEventListener('click', this.onClickPopupOutSide as any);
    }

    const trigger = React.cloneElement(children, {
      className: classNames('pb-dropdown-trigger', className),
      ...childProps,
      ref: composeRef(this.node, (children as any).ref),
    });

    let portal: React.ReactElement | null = null;
    if (popupVisible) {
      portal = (
        <Portal
          key="portal"
          getContainer={this.getContainer}
        >
          {this.getPortalContainer()}
        </Portal>
      );
    }

    return [
      trigger,
      portal,
    ];
  }
}

export default Trigger;
