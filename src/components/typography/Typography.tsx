import * as React from 'react';
import classNames from 'classnames';
import './style/index.css';

const headlineMapping = {
    head: 'h5',
    title: 'h6',
    subtitle: 'h6',
    body: 'span',
    caption: 'span'
};

interface TypographyProps {
    component?: string,
    color?: 'primary' | 'secondary' | 'third' | 'disabled';
    paragraph?: boolean,
    variant?: 'head' | 'title' | 'subtitle' | 'body' | 'caption',
    customizePrefixCls?: string,

    // decorations
    underline?: boolean;
    strong?: boolean;
    delete?: boolean;
}

function wrapperDecorations({ delete: del, strong, underline }: TypographyProps, content: React.ReactNode) {
    let currentContent = content;

    function wrap(needed: boolean | undefined, tag: string) {
        if (!needed) return;

        currentContent = React.createElement(tag, {}, currentContent);
    }

    wrap(underline, 'u');
    wrap(strong, 'strong');
    wrap(del, 'del');

    return currentContent;
}

const getPrefixCls = (suffixCls: string, customizePrefixCls?: string) => {
    if (customizePrefixCls) return customizePrefixCls;

    return `pb-${suffixCls}`;
};

const Typography: React.SFC<TypographyProps> = props => {
    const {
        component,
        paragraph,
        variant = 'body',
        customizePrefixCls,
        children,
        color,
        ...other
    } = props;

    const textNode = wrapperDecorations(props, children);
    const prefixCls = getPrefixCls(`typography`, customizePrefixCls);
    const Component = (component || (paragraph ? 'p' : headlineMapping[variant]) || 'span') as any;

    return (
        <Component
            className={classNames('', {
                [`${prefixCls}-${variant}`]: variant,
                [`${prefixCls}-${color}`]: color
            })}
            {...other}
        >
            {textNode}
        </Component>
    );
}

export default Typography;
