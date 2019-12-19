import * as React from 'react';
import './style/cardHeader.scss';
import classNames from "classnames";
import Typography from '../typography/Typography';

interface CardHeaderProps {
    customizePrefixCls?: string;
    title: React.ReactNode;
    action?: React.ReactNode;
    avatar?: React.ReactNode;
    subheader?: React.ReactNode;
}

const getPrefixCls = (suffixCls: string, customizePrefixCls?: string) => {
    if (customizePrefixCls) return customizePrefixCls;

    return `pb-${suffixCls}`;
};

const CardHeader: React.SFC<CardHeaderProps> = props => {
    const {
        title: titleProp,
        subheader: subheaderProp,
        avatar,
        customizePrefixCls,
        action
    } = props;

    const prefixCls = getPrefixCls(`card-header`, customizePrefixCls);

    const title = titleProp ? (
        <Typography
            variant={avatar ? 'subtitle' : 'head'}
            className={`${prefixCls}-title`}
        >
            {titleProp}
        </Typography>
    ) : null;

    const subheader = subheaderProp ? (
        <Typography
            variant={avatar ? 'body' : 'subtitle'}
            color="textSecondary"
            component="span"
        >
            {subheaderProp}
        </Typography>
    ) : null;

    return (
        <div className={classNames(prefixCls)}>
            {avatar && <div className={`${prefixCls}-avatar`}>{avatar}</div>}
            <div className={`${prefixCls}-content`}>
                {title}
                {subheader}
            </div>
            {action && <div className={`${prefixCls}-action`}>{action}</div>}
        </div>
    );
};

export default CardHeader;
