import * as React from 'react';
import './style/index.scss'
import classNames from "classnames";

interface CardContentProps {
    className?: string;
    style?: React.CSSProperties;
    customizePrefixCls?: string;
    component?: string;
}

const getPrefixCls = (suffixCls: string, customizePrefixCls?: string) => {
    if (customizePrefixCls) return customizePrefixCls;

    return `pb-${suffixCls}`;
};

const CardContent: React.SFC<CardContentProps> = props => {
    const {
        customizePrefixCls,
        className,
        component = 'div',
        children,
        ...other
    } = props;

    const prefixCls = getPrefixCls(`card-content`, customizePrefixCls);

    return React.createElement(component, {
        className: classNames(prefixCls, className),
        ...other
    }, children);
}

export default CardContent;
