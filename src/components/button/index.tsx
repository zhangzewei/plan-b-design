import * as React from 'react';
import './style/index.scss';
import classNames from "classnames";
import { createElement } from "react";

interface CardProps {
    className?: string;
    style?: React.CSSProperties;
    customizePrefixCls?: string;
    variant?: 'contained' | 'text' | 'outlined',
    color: 'primary' | 'secondary' | 'danger',
    size?: 'small' | 'medium' | 'large',
    disabled?: boolean,
    fullWidth?: boolean,
    href?: string;
    target?: string;
    component?: string;
    shape?: 'circle' | 'round'
}

const getPrefixCls = (suffixCls: string, customizePrefixCls?: string) => {
    if (customizePrefixCls) return customizePrefixCls;

    return `pb-${suffixCls}`;
};

const ButtonBase: React.SFC<CardProps> = props => {
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
        className: classNames(className, {
            [prefixCls]: true,
            [`${prefixCls}-${size}`]: size,
            [`${prefixCls}-${shape}`]: shape,
            [`${prefixCls}-${variant}`]: variant,
            [`${prefixCls}-${variant}-${color}`]: color,
            [`${prefixCls}-full-width`]: fullWidth,
        }),
        ...other
    }, children);
}

export default ButtonBase;
