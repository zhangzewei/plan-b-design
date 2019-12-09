import React, { Component } from 'react';
import classNames from 'classnames';
import { CommonComponentProps } from '../../common/Interface';

import './style/index.scss';

export interface PopupProps extends CommonComponentProps {
  point: { top: number, left: number };
  popupVisible: boolean;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  onMouseDown?: React.MouseEventHandler<HTMLDivElement>;
  onTouchStart?: React.TouchEventHandler<HTMLDivElement>;
  hiddenClassName?: string;
}

const Popup: React.RefForwardingComponent<HTMLDivElement, PopupProps> = (props, ref) => {
  const {
    point,
    children,
    style,
    className,
    popupVisible,
    hiddenClassName
  } = props;
  const popupStyle: React.CSSProperties = {
    ...point,
    position: 'absolute'
  }
  return (
    <div
      className={classNames('pb-trigger-popup')}
      style={popupStyle}
      ref={ref}
    >
      <div
        className={classNames(className, !popupVisible && `${hiddenClassName}`)}
        style={style}
      >
        {children}
      </div>
    </div>
  )
}

  const RefPopup = React.forwardRef<HTMLDivElement, PopupProps>(Popup);
  RefPopup.displayName = 'Popup';
  export default RefPopup;
