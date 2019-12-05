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

function cloneElementWithClassName(child: ReactElement, className: string) {
    return React.cloneElement(child, {
        className: classNames(child.props.className, className),
    });
}

function cloneChildrenWithClassName(children: ReactNode, className: string) {
    return React.Children.map(children, child => {
        return React.isValidElement(child) && cloneElementWithClassName(child, className);
    });
}

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
