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

class Card extends React.Component<CardProps> {
    render() {
        const {
            customizePrefixCls,
            style,
            bordered = true,
            children,
            className
        } = this.props;

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
}

export default Card;
