import React, { Component } from 'react';
import Trigger from './Trigger';
import { CommonComponentProps } from '../../common/Interface';

import './style/index.scss';

interface DropdownProps extends CommonComponentProps {
  trigger: ['click', 'hover', 'custom'];
  overlay: React.ReactElement | HTMLElement;
  visible?: boolean;
  onClick?: Function;
  onVisibleChange?: Function;
}

class Dropdown extends Component<DropdownProps> {
  constructor(props: DropdownProps) {
    super(props);
  }

  componentWillMount() {
    const { trigger, visible } = this.props;
    if (trigger.indexOf('custom') > -1 && visible === undefined) {
      console.error('if use custom as trigger then should use visible too');
    }
  }

  render() {
    const {
      overlay,
      trigger,
      ...other
    } = this.props;
    return (
      <Trigger
        popup={overlay}
        action={trigger}
        {...other}
      />
    );
  }
}

export default Dropdown;
