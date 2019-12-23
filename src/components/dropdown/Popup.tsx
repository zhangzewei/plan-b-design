import React from 'react';
import classNames from 'classnames';
import { CommonComponentProps } from '../../common/Interface';

import './style/index.scss';

export interface PopupProps extends CommonComponentProps {
  point: { top: number, left: number };
  visible: boolean;
  hiddenClassName?: string;
}

const Popup: React.RefForwardingComponent<HTMLDivElement, PopupProps> = (props, ref) => {
  const {
    point,
    children,
    style,
    className,
    visible,
    hiddenClassName,
    ...others
  } = props;
  const popupStyle: React.CSSProperties = {
    ...point,
    position: 'absolute',
  };
  return (
    <div
      className={classNames('pb-trigger-popup')}
      style={popupStyle}
      ref={ref}
      {...others}
    >
      <div
        className={classNames(className, !visible && `${hiddenClassName}`)}
        style={style}
      >
        {children}
      </div>
    </div>
  );
};

const RefPopup = React.forwardRef<HTMLDivElement, PopupProps>(Popup);
RefPopup.displayName = 'Popup';
export default RefPopup;
