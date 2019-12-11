import React, { Component, HTMLAttributes } from 'react';
import { Portal } from '../portal/Portal';
import Popup from './Popup';
import { offset, contains } from '../../common/utils';
import { CommonComponentProps } from '../../common/Interface';
import classNames from 'classnames';

export interface TriggerProps extends CommonComponentProps {
  trigger: ['click', 'hover', 'custom'];
  popup: React.ReactNode | (() => React.ReactNode);
  visible?: boolean;
  className?: string;
  style?: React.CSSProperties,
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
  triggerVisible: boolean
}> {
  popupContainer: HTMLElement;
  node: any;
  popupRef: any;
  clickPopupOutSideFun: void | null;

  constructor(props: TriggerProps) {
    super(props);
    this.state = {
      triggerVisible: false
    }
    this.popupContainer = this.creatPopupContainer();
    this.node = React.createRef();
    this.popupRef = React.createRef();
    this.clickPopupOutSideFun = null;
  }

  getPortalContainer = () => {
    const {
      popup,
    } = this.props;
    const mouseProps: HTMLAttributes<HTMLElement> = {};
    return (
      <Popup
        {...mouseProps}
        point={this.getRefPoint()}
        popupVisible={this.state.triggerVisible}
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
  }

  clearOutsideHandler() {
    if (this.clickPopupOutSideFun) {
      window.document.removeEventListener('click', (this.clickPopupOutSideFun as any));
      this.clickPopupOutSideFun = null;
    }
  }

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
    const { trigger } = this.props;
    return trigger.indexOf('click') !== -1;
  }

  isMouseLeaveToHideOrShow = () => {
    const { trigger } = this.props;
    return trigger.indexOf('hover') !== -1 ;
  }

  changeVisiable = (visiable: boolean, event: React.MouseEvent) => {
    if (this.state.triggerVisible !== visiable) {
      this.setState({ triggerVisible: visiable });
      this.props.onVisibleChange && this.props.onVisibleChange(visiable, event);
    }
  }

  getRefPoint = () => {
    if (this.node.current) {
      return offset(this.node.current);
    } else {
      return {
        left: 0,
        top: 0
      }
    }
  }

  onMouseEnter = (e: React.MouseEvent) => this.changeVisiable(true, e);

  onMouseLeave = (e: React.MouseEvent) => this.changeVisiable(false, e);

  onTriggerClick = (e: React.MouseEvent) => {
    if (contains(this.node.current, e.target)) {
      this.changeVisiable(!this.state.triggerVisible, e);
    }
  }

  onClickPopupOutSide = (e: React.MouseEvent) => {
    if (contains(this.node.current, e.target)) return;
    if (this.state.triggerVisible && contains(this.popupRef.current, e.target)) return;
    this.changeVisiable(false, e);
  }

  genNewChildren = (
    newChildProps: HTMLAttributes<HTMLElement> & { key: string } = { key: 'trigger' }
  ) => {
    if (this.isMouseLeaveToHideOrShow()) {
      newChildProps.onMouseEnter = this.onMouseEnter;
      newChildProps.onMouseLeave = this.onMouseLeave;
    }
    if (this.isClickToHideOrShow()) {
      newChildProps.onClick = this.onTriggerClick;
      this.clickPopupOutSideFun = window.document.addEventListener('click', this.onClickPopupOutSide as any);
    }
  }

  render() {
    const {
      children,
      className
    } = this.props;

    const {
      triggerVisible
    } = this.state;

    const trigger = React.cloneElement(children, {
      className: classNames('pb-dropdown-trigger', className),
      ref: composeRef(this.node, (children as any).ref) // compose this component ref and children refs
    });

    let portal: React.ReactElement | null = null;
    if (triggerVisible) {
      portal = (
        <Portal
          key="portal"
          getContainer={this.getContainer}
        >
          {this.getPortalContainer()}
        </Portal>
      );
    }

    const newChildProps: HTMLAttributes<HTMLElement> & { key: string } = { key: 'trigger' };
    const child = (
      <div>
        {trigger}
        {portal}
      </div>
    );

    this.genNewChildren(newChildProps);
    
    const newChild = React.cloneElement(child, {
      ...newChildProps,
      ref: composeRef(this.node, (children as any).ref)
    });
    return newChild;
  }
}

export default Trigger;