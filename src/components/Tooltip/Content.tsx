import React from 'react';

interface ContentProps {
    prefixCls?: string;
    overlay: () => React.ReactNode | React.ReactNode;
    id?: string;
}

const Content = (props: ContentProps) => {
    const { prefixCls, overlay, id } = props;

    return (
        <div className={`${prefixCls}-inner`} id={id}>
            {typeof overlay === 'function' ? overlay() : overlay}
        </div>
    )
}

export default Content;
