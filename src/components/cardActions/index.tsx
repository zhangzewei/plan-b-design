import * as React from 'react';
import './style/index.scss'
import classNames from "classnames";
import { ReactElement, ReactNode } from "react";

interface CardActionsProps {
    className?: string;
    style?: React.CSSProperties;
    customizePrefixCls?: string;
    disableActionSpacing?: boolean;
}

const cloneElementWithClassName = (child: ReactElement, className: string) =>
    React.cloneElement(child, {
        className: classNames(child.props.className, className),
    });

const cloneChildrenWithClassName = (children: ReactNode, className: string) =>
    React.Children.map(
        children,
        child => React.isValidElement(child) && cloneElementWithClassName(child, className)
    );

const getPrefixCls = (suffixCls: string, customizePrefixCls?: string) => {
    if (customizePrefixCls) return customizePrefixCls;

    return `pb-${suffixCls}`;
};

const CardActions: React.SFC<CardActionsProps> = props => {
    const {
        customizePrefixCls,
        className,
        children,
        disableActionSpacing = false,
        ...other
    } = props;

    const prefixCls = getPrefixCls(`card-actions`, customizePrefixCls);

    return (
        <div className={classNames(prefixCls, className)} {...other}>
            {disableActionSpacing ? children : cloneChildrenWithClassName(children, `${prefixCls}-item`)}
        </div>
    )
}

export default CardActions;
