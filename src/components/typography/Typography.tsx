import * as React from 'react';
import classNames from 'classnames';
import './style/index.scss';

const HEADLINE_MAPPING = {
    head: 'h5',
    title: 'h6',
    subtitle: 'h6',
    body: 'span',
    caption: 'span'
};

interface TypographyProps {
    className?: string;
    style?: React.CSSProperties;
    component?: string,
    color?: 'textPrimary' | 'textSecondary' | 'textThird' | 'disabled' | 'link' | 'success' | 'error' | 'warning';
    paragraph?: boolean,
    variant?: 'head' | 'title' | 'subtitle' | 'body' | 'caption',
    customizePrefixCls?: string,
    gutterBottom: boolean;
    align: 'inherit' | 'left' | 'center' | 'right' | 'justify',
    display: 'initial' | 'block' | 'inline',

    // decorations
    underline?: boolean;
    strong?: boolean;
    delete?: boolean;
    code?: boolean;
}

function wrapperDecorations({ delete: del, strong, underline, code }: TypographyProps, content: React.ReactNode) {
    let currentContent = content;

    function wrap(needed: boolean | undefined, tag: string) {
        if (!needed) return;

        currentContent = React.createElement(tag, {}, currentContent);
    }

    wrap(underline, 'u');
    wrap(strong, 'strong');
    wrap(del, 'del');
    wrap(code, 'code');

    return currentContent;
}

const getPrefixCls = (suffixCls: string, customizePrefixCls?: string) => customizePrefixCls || `pb-${suffixCls}`;

const Typography: React.SFC<TypographyProps> = props => {
    const {
        className,
        component,
        paragraph,
        variant = 'body',
        customizePrefixCls,
        children,
        color,
        gutterBottom,
        align,
        display,
        ...other
    } = props;

    const textNode = wrapperDecorations(props, children);
    const prefixCls = getPrefixCls(`typography`, customizePrefixCls);
    const Component = (component || (paragraph ? 'p' : HEADLINE_MAPPING[variant]) || 'span');

    return React.createElement(Component, {
        className: classNames(prefixCls, {
            [`${prefixCls}-${variant}`]: variant,
            [`${prefixCls}-${color}`]: color,
            [`${prefixCls}-gutter-bottom`]: gutterBottom,
            [`${prefixCls}-align-${align}`]: align !== 'inherit',
            [`${prefixCls}-display-${display}`]: display !== 'initial',
            className
        }),
        ...other
    }, textNode);
}

export default Typography;
