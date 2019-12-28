import * as React from "react";
import classnames from 'classnames';
import '../../asset/fonts/iconfont.css';

interface IconProps {
  type: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => any;
}

const Icon: React.SFC<IconProps> = props => {
  const {
    className,
    style,
    type,
    ...others
  } = props;

  const classNames = classnames('pb-icon', `icon-${type}`, className);

  return (
    <i
      className={classNames}
      style={style}
      {...others}
    />
  );
}

export default Icon;