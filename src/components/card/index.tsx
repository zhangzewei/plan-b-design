import * as React from 'react';
import './style/index.scss';
import classNames from "classnames";

interface CardProps {
    className?: string;
    style?: React.CSSProperties;
    customizePrefixCls?: string;
    bordered?: boolean;
}

const getPrefixCls = (suffixCls: string, customizePrefixCls?: string) => {
    if (customizePrefixCls) return customizePrefixCls;

    return `pb-${suffixCls}`;
};

const Card: React.SFC<CardProps> = props => {
    const {
        customizePrefixCls,
        style,
        bordered = true,
        children,
        className
    } = props;

    const prefixCls = getPrefixCls(`card`, customizePrefixCls);

    return (
        <div className={classNames(prefixCls, {
            [`${prefixCls}-bordered`]: bordered
        }, className)}
             style={{ ...style }}
        >
            {children}
        </div>
    );
}

export default Card;
