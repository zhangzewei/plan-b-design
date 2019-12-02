import * as React from 'react';
import './style/index.scss';
import classNames from "classnames";

interface CardProps {
    className?: string;
    style?: React.CSSProperties;
    customizePrefixCls?: string;
    title?: React.ReactNode;
    extra?: React.ReactNode;
    size?: 'default' | 'small';
    bordered?: boolean;
}

const getPrefixCls = (suffixCls: string, customizePrefixCls?: string) => {
    if (customizePrefixCls) return customizePrefixCls;

    return `pb-${suffixCls}`;
};

const Card: React.SFC<CardProps> = props => {
    const {
        customizePrefixCls,
        title,
        extra,
        size = 'default',
        style,
        bordered = true,
        children
    } = props;

    const prefixCls = getPrefixCls(`card`, customizePrefixCls);
    const head = title ? (
        <div
            className={classNames(`${prefixCls}-head`, {
                [`${prefixCls}-head-bordered`]: !!children
            })}
        >
            <div className={`${prefixCls}-head-wrapper`}>
                {title && <div className={`${prefixCls}-head-title`}>{title}</div>}
                {extra && <div className={`${prefixCls}-extra`}>{extra}</div>}
            </div>
        </div>
    ) : null;
    const body = children ? (
        <div className={`${prefixCls}-body`}>
            {children}
        </div>
    ) : null;

    return (
        <div className={classNames(prefixCls, {
            [`${prefixCls}-${size}`]: size !== 'default',
            [`${prefixCls}-bordered`]: bordered
        })}
             style={{ ...style }}
        >
            {head}
            {body}
        </div>
    );
}

export default Card;
