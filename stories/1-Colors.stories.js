import React from "react";
import Card from "../src/components/card/Card";
import CardHeader from "../src/components/card/CardHeader";

import '../src/asset/colors.css';

export default {
    title: "Colors",
};

const textColorList = [
  'pb-color-brand-primary',
  'pb-color-brand-primary-hover-link',
  'pb-color-brand-primary-light',
  'pb-color-brand-primary-disabled',
  'pb-color-function-success',
  'pb-color-function-warning',
  'pb-color-function-error',
  'pb-color-function-success-light',
  'pb-color-function-warning-light',
  'pb-color-function-error-light',
  'pb-color-assit-red',
  'pb-color-assit-yellow',
  'pb-color-common-primary',
  'pb-color-common-secondary',
  'pb-color-common-third',
  'pb-color-common-hover-link',
  'pb-color-common-secondary-hover',
  'pb-color-common-divider',
  'pb-color-common-border',
  'pb-color-common-bg-hover',
  'pb-color-common-disabled',
  'pb-color-common-bg-primary',
  'pb-color-common-bg-secondary'
];

const bgColorList = [
  'pb-bg-brand-primary',
  'pb-bg-brand-primary-hover-link',
  'pb-bg-brand-primary-light',
  'pb-bg-brand-primary-disabled',
  'pb-bg-function-success',
  'pb-bg-function-warning',
  'pb-bg-function-error',
  'pb-bg-function-success-light',
  'pb-bg-function-warning-light',
  'pb-bg-function-error-light',
  'pb-bg-assit-red',
  'pb-bg-assit-yellow',
  'pb-bg-common-primary',
  'pb-bg-common-secondary',
  'pb-bg-common-third',
  'pb-bg-common-hover-link',
  'pb-bg-common-secondary-hover',
  'pb-bg-common-divider',
  'pb-bg-common-border',
  'pb-bg-common-bg-hover',
  'pb-bg-common-disabled',
  'pb-bg-common-bg-primary',
  'pb-bg-common-bg-secondary'
];

const genColorCard = className => {
  let style = {};
  if (className === 'pb-color-common-bg-primary') {
    style={ backgroundColor: '#e5e5e5' };
  }
  if (className === 'pb-bg-common-primary') {
    style={ color: '#fff' };
  }
  return (
    <Card className={className} style={style} bordered={false}>
        <CardHeader title={className} />
    </Card>
  );
}

const renderBlock = (name, renderedDom) => (
  <div style={{ flex: '0 0 45%' }}>
    <h3>{name}</h3>
    {renderedDom}
  </div>
)

export const Colors = () => {
  const textColorCards = textColorList.map(textColor => genColorCard(textColor));
  const bgColorCards = bgColorList.map(textColor => genColorCard(textColor));
  const textColorBlock = renderBlock('TextColor', textColorCards);
  const bgColorBlock = renderBlock('BgColor', bgColorCards);
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {textColorBlock}
      {bgColorBlock}
    </div>
  )
}
