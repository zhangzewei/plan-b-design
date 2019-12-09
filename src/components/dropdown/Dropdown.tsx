import React, { Component, HTMLAttributes } from 'react';
import Trigger from './Trigger';
import { CommonComponentProps } from '../../common/Interface';

import './style/index.scss';

interface DropdownProps extends CommonComponentProps {
  trigger: ['click', 'hover', 'custom'];
  overlay: React.ReactElement | HTMLElement;
  disabled?: boolean;
  onClick?: Function;
  onVisibleChange?: Function;
}

class Dropdown extends Component<DropdownProps> {
  constructor(props: DropdownProps) {
    super(props);
  }

  render() {
    const {
      overlay,
      ...other
    } = this.props;
    return (
      <Trigger
        popup={overlay}
        {...other}
      />
    );
  }
}

export default Dropdown;
