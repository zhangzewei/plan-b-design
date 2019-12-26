import * as React from 'react';
import './style/index.scss';
import Trigger from "../dropdown/Trigger";
import { CommonComponentProps } from "../../common/Interface";
import classNames from "classnames";
import Content from "./Content";

interface TooltipProps extends CommonComponentProps {
    customizePrefixCls: string;
    trigger: ['click', 'hover', 'custom'];
    visible?: boolean;
    onClick?: Function;
    onVisibleChange?: Function;
    popupClassName?: string;
    popupStyle?: React.CSSProperties;
    id?: string;
    overlay: () => React.ReactNode | React.ReactNode;
    arrowContent?: React.ReactElement;
}

export type TooltipPlacement =
    | 'top'
    | 'left'
    | 'right'
    | 'bottom'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight'
    | 'leftTop'
    | 'leftBottom'
    | 'rightTop'
    | 'rightBottom';

export type TooltipTrigger = 'hover' | 'focus' | 'click' | 'contextMenu';

const getPrefixCls = (suffixCls: string, customizePrefixCls?: string) => {
    if (customizePrefixCls) return customizePrefixCls;

    return `pb-${suffixCls}`;
};

const Tooltip: React.SFC<TooltipProps> = props => {
    const {
        customizePrefixCls,
        className,
        popupClassName,
        overlay,
        trigger,
        ...other
    } = props;

    const prefixCls = getPrefixCls(`tooltip`, customizePrefixCls);

    const getPopupElement = () => {
        const { arrowContent = null, overlay, id } = props;
        return [
            <div className={`${prefixCls}-arrow`} key="arrow">
                {arrowContent}
            </div>,
            <Content key="content" prefixCls={prefixCls} id={id} overlay={overlay} />,
        ];
    };

    return (
        <Trigger
            className={classNames(prefixCls, className)}
            popup={getPopupElement}
            action={trigger}
            popupClassName={classNames(`${prefixCls}-popup`, popupClassName)}
            {...other}
        />
    );
}

export default Tooltip;
