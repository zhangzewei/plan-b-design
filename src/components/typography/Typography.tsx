import * as React from 'react';
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
    paragraph?: boolean,
    variant?: 'head' | 'title' | 'subtitle' | 'body' | 'caption',
    customizePrefixCls?: string,
}

const Typography: React.SFC<TypographyProps> = props => {
    const {
        component,
        paragraph,
        variant = 'body',
        customizePrefixCls,
        ...other
    } = props;

    const getPrefixCls = (suffixCls: string, customizePrefixCls?: string) => {
        if (customizePrefixCls) return customizePrefixCls;

        return `pb-${suffixCls}`;
    };
    const prefixCls = getPrefixCls(`typography-${variant}`, customizePrefixCls);
    const Component = (component || (paragraph ? 'p' : headlineMapping[variant]) || 'span') as any;

    return <Component className={prefixCls} {...other} />;
}

export default Typography;
