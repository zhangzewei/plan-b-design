import * as React from 'react';
import './style/index.scss';
import classNames from "classnames";
import { createElement } from "react";

interface ButtonProps {
    className?: string;
    style?: React.CSSProperties;
    customizePrefixCls?: string;
    variant?: 'contained' | 'text' | 'outlined',
    color?: 'primary' | 'secondary' | 'danger',
    size?: 'small' | 'medium' | 'large',
    disabled?: boolean,
    fullWidth?: boolean,
    href?: string;
    target?: string;
    component?: string;
    shape?: 'circle' | 'round',
    onClick?: React.MouseEventHandler<HTMLElement>;
}

const getPrefixCls = (suffixCls: string, customizePrefixCls?: string) => {
    if (customizePrefixCls) return customizePrefixCls;

    return `pb-${suffixCls}`;
};

const ButtonBase: React.SFC<ButtonProps> = props => {
    const {
        customizePrefixCls,
        className,
        variant = 'text',
        color = 'primary',
        size,
        shape,
        fullWidth = false,
        href,
        component,
        children,
        ...other
    } = props;

    const prefixCls = getPrefixCls(`button`, customizePrefixCls);

    const Component = component || (href ? "a" : "") || 'button';
    return createElement(Component, {
        className: classNames({
            [prefixCls]: true,
            [`${prefixCls}-${size}`]: size,
            [`${prefixCls}-${shape}`]: shape,
            [`${prefixCls}-${variant}`]: variant,
            [`${prefixCls}-${variant}-${color}`]: color,
            [`${prefixCls}-full-width`]: fullWidth,
        }, className),
        ...other
    }, children);
};

export default ButtonBase;
