import * as React from 'react';
import './style/index.scss';
import classNames from "classnames";

interface CardProps {
    className?: string;
    style?: React.CSSProperties;
    customizePrefixCls?: string;
    variant?: 'contained' | 'text' | 'outlined',
    color: 'primary' | 'secondary' | 'danger',
    size?: 'small' | 'medium' | 'large',
    disabled?: boolean
}

const getPrefixCls = (suffixCls: string, customizePrefixCls?: string) => {
    if (customizePrefixCls) return customizePrefixCls;

    return `pb-${suffixCls}`;
};

const ButtonBase: React.SFC<CardProps> = props => {
    const {
        customizePrefixCls,
        variant = 'text',
        color = 'primary',
        size = 'medium',
        ...other
    } = props;

    const prefixCls = getPrefixCls(`button`, customizePrefixCls);

    return (
        <button className={classNames(prefixCls, {
            [`${prefixCls}-${size}`]: size,
            [`${prefixCls}-${variant}`]: variant,
            [`${prefixCls}-${variant}-${color}`]: color,
        })}
                {...other}
        />
    );
}

export default ButtonBase;
